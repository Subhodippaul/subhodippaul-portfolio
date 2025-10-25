import { Field, FieldLabel, FieldContent, FieldGroup } from "@/components/ui/field";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
	const [form, setForm] = useState({ name: "", email: "", description: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_9yt3hfx', // Replace with your EmailJS service ID
        'template_6gfegcv', // Replace with your EmailJS template ID
        {
          to_email: 'subhodip2.paul@gmail.com',
          from_name: form.name,
          from_email: form.email,
          message: form.description
        },
        'ukPEeNdomfo0E7Fhi' // Replace with your EmailJS public key
      );
      alert('Message sent successfully!');
      setForm({ name: '', email: '', description: '' }); // Clear form
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    }
  };	return (
		<section className="mx-auto max-w-4xl px-4 py-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				{/* Left: blank image */}
				<div className="flex justify-center items-center h-full">
					<div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
						{/* Blank placeholder */}
					</div>
				</div>
				{/* Right: contact form */}
				<form className="w-full" onSubmit={handleSubmit}>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="name" className="font-bold">Name</FieldLabel>
							<FieldContent>
								<input
									id="name"
									name="name"
									type="text"
									value={form.name}
									onChange={handleChange}
									required
									className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-amber-600"
									placeholder="Your name"
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel htmlFor="email" className="font-bold">Email</FieldLabel>
							<FieldContent>
								<input
									id="email"
									name="email"
									type="email"
									value={form.email}
									onChange={handleChange}
									required
									className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-amber-600"
									placeholder="Your email"
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel htmlFor="description" className="font-bold">Description</FieldLabel>
							<FieldContent>
								<textarea
									id="description"
									name="description"
									value={form.description}
									onChange={handleChange}
									required
									rows={4}
									className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-amber-600 resize-none"
									placeholder="Describe your message"
								/>
							</FieldContent>
						</Field>
						<button
							type="submit"
							className="mt-4 px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors w-full"
						>
							Send Message
						</button>
					</FieldGroup>
				</form>
			</div>
		</section>
	);
}
