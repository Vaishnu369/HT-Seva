"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, Eye, Download } from "lucide-react"

export function UserProfile() {
  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        {/* Profile Header */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Your Profile</h3>
        </div>

        {/* Profile Avatar and Info */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-4">
            <Avatar className="w-20 h-20 mb-2">
              <AvatarImage src="/user-avatar.jpg" alt="Asmita Gharmalkar" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">AG</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-muted rounded-full p-1">
              <Download className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>

          <h4 className="text-xl font-semibold text-card-foreground mb-1">Asmita Gharmalkar</h4>
          <p className="text-sm text-muted-foreground mb-4">gharmalkarasmita@gmail.com</p>

          {/* Action Buttons */}
          <div className="flex gap-2 w-full">
            <Button size="sm" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white">
              <Edit className="w-4 h-4 mr-2" />
              Edit profile
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-cyan-500 text-cyan-500 hover:bg-cyan-50 bg-transparent"
            >
              <Eye className="w-4 h-4 mr-2" />
              View profile
            </Button>
          </div>
        </div>

        {/* Profile Photo Guidelines */}
        <div className="mb-6">
          <h5 className="font-medium text-card-foreground mb-3">Profile Photo Guidelines</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Upload a clear, recent photo of yourself.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Face should be clearly visible.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Supported formats: JPG, PNG.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Photo ID is mandatory to continue the application.</span>
            </li>
          </ul>
        </div>

        {/* Language Option */}
        <div className="border-t pt-4">
          <Button variant="link" className="text-primary p-0 h-auto font-normal">
            Translate to Hindi
          </Button>
        </div>

        {/* Support Section */}
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            If you have any Query, please reach out to{" "}
            <span className="text-primary font-medium">support@happythoughts.com</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
