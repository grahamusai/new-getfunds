'use client'

import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen  text-white p-6">
      <div className="max-w-3xl mx-auto bg-black p-10  space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Send us a message</h1>
          <p className="text-gray-400">
            Please fill in the form below and we will get in touch with you shortly
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Your Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              className="bg-white border-none"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              className="bg-white border-none"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              className="bg-white border-none"
              placeholder="+27 123456789"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website Address</Label>
            <Input
              id="website"
              type="url"
              className="bg-white border-none"
              placeholder="www.example.co.za"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              className="bg-white border-none"
              placeholder="Company Name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Required</Label>
            <Select>
              <SelectTrigger className="bg-white border-none text-black">
                <SelectValue placeholder="Brand Development" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand">Brand Development</SelectItem>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="marketing">Digital Marketing</SelectItem>
                <SelectItem value="design">Graphic Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-6 rounded-full text-lg font-medium"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </Button>
        </form>
      </div>
    </div>
  )
}

