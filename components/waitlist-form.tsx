"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }])

      if (error) {
        if (error.code === "23505") {
          setError("You're already on the waitlist!")
        } else {
          setError("Something went wrong. Please try again.")
        }
        return
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Unexpected error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-800 text-teal-600 dark:text-teal-300 mb-4">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">You're on the list!</h3>
        <p className="text-slate-600 dark:text-slate-300">
          We'll notify you when the course launches. Get ready to turn your code into a business!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-slate-300 dark:border-slate-600"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>

      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}
