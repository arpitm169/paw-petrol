import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Dog, Bone, Heart, Zap, PawPrint } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

type HelpOption = {
  title: string
  description: string
  icon: React.ReactNode
  action: string
  story: string
}

export default function Component() {
  const [selectedOption, setSelectedOption] = useState<HelpOption | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const helpOptions: HelpOption[] = [
    {
      title: "Paw Patrol Volunteer",
      description: "Join the elite Paw Patrol and help maintain peace in our canine utopia.",
      icon: <PawPrint className="h-6 w-6" />,
      action: "You've joined the Paw Patrol! Your first mission is to investigate a series of missing chew toy incidents in the Golden Retriever district.",
      story: "As you don your shiny new Paw Patrol badge, you feel a surge of pride. Your first case leads you to the Golden Retriever district, where a string of chew toy disappearances has left the local pups distraught. Using your keen sense of smell and state-of-the-art bark analysis technology, you follow a trail of drool to an abandoned doghouse. Inside, you discover a mischievous group of Dachshund puppies who had been 'borrowing' the toys for their underground agility training course. With a stern but gentle 'woof', you teach them about respecting others' property. The case is solved, and you return the toys to their rightful owners, earning a round of joyful barks and tail wags from the grateful Golden Retrievers."
    },
    {
      title: "Bark-to-Speech Translator",
      description: "Develop cutting-edge technology to improve communication between different dog breeds.",
      icon: <Zap className="h-6 w-6" />,
      action: "You're now part of the Bark-to-Speech project! Your team is working on deciphering the nuanced dialects of Chihuahuas.",
      story: "In the high-tech labs of Canine Communications Inc., you sit surrounded by an array of advanced audio equipment. Your current challenge: decoding the rapid-fire yaps of Chihuahua dialect. As you analyze waveforms and frequency patterns, you notice a recurring sequence in their barks. Excitement builds as you realize it's not just random noise - it's a complex language of subtle tonal variations. Your breakthrough comes when you correlate the pitch of their barks with tiny muscle movements in their ears. Suddenly, the floodgates open, and you're translating phrases like 'The small are mighty' and 'Tremble before my tiny paws'. Your work revolutionizes inter-breed communication and earns you the prestigious Golden Hydrant Award for Technological Innovation."
    },
    {
      title: "Interspecies Ambassador",
      description: "Foster understanding between dogs and other species, especially with the feline resistance.",
      icon: <Heart className="h-6 w-6" />,
      action: "Congratulations on becoming an Interspecies Ambassador! Your first task is to organize a peace summit with the leader of the feline resistance.",
      story: "The tension is palpable as you enter the neutral zone - a sprawling meadow of catnip and premium grass. You've arranged this historic meeting between Lord Barkington, the venerable Old English Sheepdog leader of the Canine Council, and Whiskers McFluff, the enigmatic Siberian cat heading the feline resistance. As the two leaders approach, fur bristling and tails high, you introduce yourself with a gentle 'woof' and a respectful 'meow'. Your unique ability to speak both languages proves crucial as you mediate the discussion. Topics range from territory disputes over sunny napping spots to the controversial 'right to chase' legislation. By the end of the day, against all odds, you've brokered a historic 'Paw-ct of Friendship'. The sight of Lord Barkington and Whiskers McFluff sharing a bowl of water marks the dawn of a new era of interspecies cooperation."
    },
    {
      title: "Cosmic Stick Researcher",
      description: "Join the scientific team exploring the mysteries of the universe through fetch-based experiments.",
      icon: <Bone className="h-6 w-6" />,
      action: "Welcome to the Cosmic Stick Research Team! You'll be analyzing data from the recent Sirius Star Fetch expedition.",
      story: "In the gleaming Bark-o-Tory of the Intergalactic Fetch Institute, you pore over the data from the Sirius Star Fetch expedition. The mission, which sent a team of highly trained Space Retrievers to the Dog Star, aimed to fetch a stick thrown by ancient canine ancestors millennia ago. As you analyze the quantum fetch patterns and superluminal trajectory data, you notice an anomaly. The stick's composition isn't mere cosmic driftwood - it's an artifact of incredible power. Your tail wags with excitement as you realize its potential: this Cosmic Stick could generate endless sustainable energy for all of dogkind. Your discovery ushers in a new age of prosperity, with fire hydrants on every corner and an endless supply of premium kibble for all. You're awarded the coveted title of Arch-Woofer of the Royal Academy of Stick Sciences, cementing your place in canine history."
    }
  ]

  const handleChoose = (option: HelpOption, index: number) => {
    setIsAnimating(true)
    setSelectedOption(option)
    const button = buttonRefs.current[index]
    if (button) {
      button.style.animation = 'pacman-eat 0.5s linear forwards'
    }
    setTimeout(() => {
      setIsAnimating(false)
      setDialogOpen(true)
      if (button) {
        button.style.animation = ''
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 p-8">
      <style jsx global>{`
        @keyframes pacman-eat {
          0% { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
          25% { clip-path: polygon(75% 0, 100% 50%, 75% 100%, 100% 100%, 100% 0); }
          50% { clip-path: polygon(50% 0, 100% 50%, 50% 100%, 100% 100%, 100% 0); }
          75% { clip-path: polygon(25% 0, 100% 50%, 25% 100%, 100% 100%, 100% 0); }
          100% { clip-path: polygon(0 0, 100% 50%, 0 100%, 100% 100%, 100% 0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
          Shape the Canine Future
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpOptions.map((option, index) => (
            <Card key={index} className="flex flex-col justify-between bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg border-transparent hover:bg-opacity-20 transition-all duration-300">
              <CardHeader className="flex-grow">
                <CardTitle className="flex items-center gap-2 text-cyan-300 text-xl leading-tight mb-2">
                  {option.icon}
                  <span className="break-words hyphens-auto">{option.title}</span>
                </CardTitle>
                <CardDescription className="text-gray-300">{option.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <div className="w-full relative overflow-hidden">
                  <Button 
                    ref={el => buttonRefs.current[index] = el}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                    onClick={() => handleChoose(option, index)}
                    disabled={isAnimating}
                  >
                    Choose
                  </Button>
                  <div 
                    className="absolute inset-0 bg-yellow-400"
                    style={{
                      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                      animation: isAnimating ? 'pacman-eat 0.5s linear forwards' : 'none'
                    }}
                  />
                </div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogContent className="max-w-[800px] w-full bg-gradient-to-br from-gray-900 to-blue-900 border-cyan-500">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-cyan-300">{selectedOption?.title}</DialogTitle>
                      <DialogDescription className="text-gray-300">
                        {selectedOption?.action}
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="mt-4 max-h-[60vh] overflow-auto pr-4">
                      <p className="text-sm leading-relaxed text-gray-200">
                        {selectedOption?.story}
                      </p>
                    </ScrollArea>
                    <DialogFooter className="mt-4">
                      <div className="flex justify-center w-full">
                        <Dog className="h-24 w-24 text-cyan-400 animate-bounce" />
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}