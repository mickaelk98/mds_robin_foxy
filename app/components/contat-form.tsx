"use client";

import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { useState } from "react";
import { databases, ID } from "@/app/lib/appwrite";

export function ContactForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation manuelle
    if (
      formData.name.length > 250 ||
      formData.email.length > 250 ||
      formData.subject.length > 150 ||
      formData.message.length > 1000
    ) {
      alert("Un ou plusieurs champs dépassent la limite autorisée.");
      return;
    }

    try {
      const response = await databases.createDocument(
        "682c1698002f2b240161",
        "682c169f002337038260",
        ID.unique(),
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );
      console.log("Document créé :", response);
      alert("Message envoyé !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue.");
    }
  };

  return (
    <div
      className={cn("flex flex-col gap-6 w-full max-w-[450px]", className)}
      {...props}
    >
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Information"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
