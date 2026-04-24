import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Send, Upload, X, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  software: string;
  description: string;
}

interface UploadedImage {
  file: File;
  preview: string;
}

export const Support = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    software: '',
    description: '',
  });
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    ticketId?: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.software.trim()) {
      newErrors.software = 'Software/Product name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith('image/')
    );

    const newImages = imageFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('software', formData.software);
      formDataToSend.append('description', formData.description);

      images.forEach((image) => {
        formDataToSend.append('images', image.file);
      });

      const response = await fetch('/.netlify/functions/submit-ticket', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Support ticket submitted successfully!',
          ticketId: result.ticketId,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          software: '',
          description: '',
        });
        images.forEach((img) => URL.revokeObjectURL(img.preview));
        setImages([]);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to submit ticket. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup previews on unmount
  React.useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-primary-900/20 dark:to-slate-900 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <SectionHeader
            preheading="Get Help"
            heading="Submit a Support Ticket"
            subheading="Having issues? Let us know and we'll get back to you as soon as possible."
            align="center"
            maxWidth="lg"
          />
        </div>
      </section>

      {/* Support Form */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.name
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-slate-300 dark:border-slate-700'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.email
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-slate-300 dark:border-slate-700'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Software/Product */}
            <div>
              <label
                htmlFor="software"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Software/Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="software"
                name="software"
                value={formData.software}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.software
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-slate-300 dark:border-slate-700'
                }`}
                placeholder="Which product are you having issues with?"
              />
              {errors.software && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.software}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                  errors.description
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-slate-300 dark:border-slate-700'
                }`}
                placeholder="Please describe your issue in detail..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Attachments (Images)
              </label>

              {/* Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-slate-300 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600'
                }`}
              >
                <Upload className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  Drag and drop images here, or click to browse
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Supports: JPG, PNG, GIF, WebP
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />

              {/* Image Previews */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative group rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"
                    >
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 truncate">
                        {image.file.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={<Send />}
              iconPosition="right"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit Ticket'}
            </Button>

            {/* Success Message */}
            {submitStatus.type === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 dark:border-green-700 rounded-lg animate-fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">
                      {submitStatus.message}
                    </p>
                    {submitStatus.ticketId && (
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Your ticket ID: <span className="font-mono font-semibold">{submitStatus.ticketId}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus.type === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 dark:border-red-700 rounded-lg animate-fade-in">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 dark:text-red-200">
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};
