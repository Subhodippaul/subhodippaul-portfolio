import { Field, FieldLabel, FieldContent, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

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
				<form className="w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700" onSubmit={handleSubmit}>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="name" className="font-bold">Name</FieldLabel>
							<FieldContent>
								<Input
									id="name"
									name="name"
									type="text"
									value={form.name}
									onChange={handleChange}
									required
									placeholder="Your name"
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel htmlFor="email" className="font-bold">Email</FieldLabel>
							<FieldContent>
								<Input
									id="email"
									name="email"
									type="email"
									value={form.email}
									onChange={handleChange}
									required
									placeholder="Your email"
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel htmlFor="description" className="font-bold">Description</FieldLabel>
							<FieldContent>
								<Textarea
									id="description"
									name="description"
									value={form.description}
									onChange={handleChange}
									required
									rows={4}
									placeholder="Describe your message"
								/>
							</FieldContent>
						</Field>
						<Button
							type="submit"
							className="mt-4 px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors w-full"
						>
							Send Message
						</Button>
					</FieldGroup>
				</form>
			</div>
		</section>
	);
}
