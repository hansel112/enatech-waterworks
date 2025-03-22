
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_tbfvjlq';
const EMAILJS_TEMPLATE_ID = 'template_csvghkb';
const EMAILJS_PUBLIC_KEY = 'STBpc4qHTdux_kOh8';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'General Inquiry'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Initialize EmailJS with the public key first
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Prepare template parameters - ensure all fields from the form are included
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      company: formData.company,
      message: formData.message,
      service: formData.service,
      // Make sure the following parameters match your EmailJS template variables
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `New Contact Form Submission - ${formData.service}`,
      to_name: 'ENATECH Team',
      to_email: 'enatechcoltd@gmail.com'
    };
    
    // Send email using EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'General Inquiry'
      });
    })
    .catch((error) => {
      console.error('Email error:', error);
      setIsSubmitting(false);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email at enatechcoltd@gmail.com",
        variant: "destructive"
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
            placeholder="Your Name"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company / Organization
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full"
            placeholder="Your Company"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">
          Interested Service <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-enatech-blue focus:border-transparent"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Smart Digital Water Quality Testing">Smart Digital Water Quality Testing</option>
          <option value="Water Treatment Solutions">Water Treatment Solutions</option>
          <option value="Agricultural Advisory Services">Agricultural Advisory Services</option>
          <option value="Product Inquiry">Product Inquiry</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full"
          placeholder="Tell us about your project or requirements..."
        />
      </div>
      
      <div className="mt-6">
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-enatech-blue hover:bg-enatech-blue-dark transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Sending Message...
            </>
          ) : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
