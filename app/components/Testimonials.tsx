import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Solutions Inc.",
    quote: "NextGenFlow revolutionized our workflow, increasing efficiency by 40%.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    company: "InnovateNow",
    quote: "The AI integration provided by NextGenFlow has been a game-changer for our business.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Alex Johnson",
    company: "Future Systems",
    quote: "NextGenFlow's custom software solutions have given us a significant competitive edge.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card-bg p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-text-secondary">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-text-secondary italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

