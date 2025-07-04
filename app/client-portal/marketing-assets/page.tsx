"use client"

import { Download, Image as ImageIcon, FileVideo, FileAudio, File } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const marketingAssets = {
  images: [
    {
      title: "Cosmic Quest Hero",
      type: "Banner",
      dimensions: "1920x1080",
      preview: "/placeholder.svg?height=200&width=400&query=cosmic+quest+game+banner",
    },
    {
      title: "Valkyrie's Valor Logo",
      type: "Logo",
      dimensions: "512x512",
      preview: "/placeholder.svg?height=200&width=200&query=valkyrie+game+logo",
    },
    {
      title: "Goblin's Gold Promo",
      type: "Social Media",
      dimensions: "1200x630",
      preview: "/placeholder.svg?height=200&width=300&query=fantasy+goblin+gold+game",
    },
  ],
  videos: [
    {
      title: "Game Trailer 2024",
      duration: "1:30",
      format: "MP4",
      size: "24.5 MB",
    },
    {
      title: "Gameplay Highlights",
      duration: "2:15",
      format: "MP4",
      size: "35.8 MB",
    },
    {
      title: "Feature Showcase",
      duration: "1:45",
      format: "MP4",
      size: "28.2 MB",
    },
  ],
  audio: [
    {
      title: "Main Theme",
      duration: "2:30",
      format: "WAV",
      size: "12.4 MB",
    },
    {
      title: "Victory Fanfare",
      duration: "0:45",
      format: "WAV",
      size: "5.8 MB",
    },
    {
      title: "Background Music",
      duration: "3:15",
      format: "WAV",
      size: "15.6 MB",
    },
  ],
  documents: [
    {
      title: "Brand Guidelines",
      format: "PDF",
      size: "2.8 MB",
      updated: "2024-02-15",
    },
    {
      title: "Marketing Kit",
      format: "ZIP",
      size: "156 MB",
      updated: "2024-02-10",
    },
    {
      title: "Press Release Template",
      format: "DOCX",
      size: "1.2 MB",
      updated: "2024-02-01",
    },
  ],
}

export default function MarketingAssets() {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Marketing Assets</h2>
        </div>

        <Tabs defaultValue="images" className="space-y-4">
          <TabsList>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Images
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <FileVideo className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <FileAudio className="h-4 w-4" />
              Audio
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <File className="h-4 w-4" />
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="images" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {marketingAssets.images.map((asset) => (
                <Card key={asset.title}>
                  <CardContent className="p-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={asset.preview}
                        alt={asset.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">{asset.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {asset.type} • {asset.dimensions}
                      </p>
                      <Button className="mt-2 w-full" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {marketingAssets.videos.map((asset) => (
                <Card key={asset.title}>
                  <CardContent className="p-4">
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <FileVideo className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">{asset.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {asset.duration} • {asset.format} • {asset.size}
                      </p>
                      <Button className="mt-2 w-full" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {marketingAssets.audio.map((asset) => (
                <Card key={asset.title}>
                  <CardContent className="p-4">
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <FileAudio className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">{asset.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {asset.duration} • {asset.format} • {asset.size}
                      </p>
                      <Button className="mt-2 w-full" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {marketingAssets.documents.map((asset) => (
                <Card key={asset.title}>
                  <CardContent className="p-4">
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <File className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">{asset.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {asset.format} • {asset.size} • Updated {asset.updated}
                      </p>
                      <Button className="mt-2 w-full" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
} 