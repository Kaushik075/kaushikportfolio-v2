import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d3ijmcdsoafcrsrcq5a0', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'kaushikyeddanapudi0406@gmail.com',
      link: 'mailto:kaushikyeddanapudi0406@gmail.com',
      color: 'text-yellow-400'
    },
    {
      icon: 'ri-linkedin-line',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/kaushik-yeddanapudi-a7603a323/',
      color: 'text-yellow-400'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '+91 7993273549',
      link: 'tel:+917993273549',
      color: 'text-yellow-400'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Location',
      value: 'Hyderabad, India (500098)',
      link: '#',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Get In <span className="text-black font-black">Touch</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Ready to discuss your next data analytics project? Let's connect and explore how I can offer my services to transform your business data.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center justify-center">
                <i className="ri-contacts-line text-black mr-3"></i>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-4 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg border border-yellow-400 hover:shadow-xl transition-all duration-300">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-4`}>
                      <i className={`${info.icon} text-xl text-black`}></i>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">{info.label}</p>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-white font-medium hover:text-yellow-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
