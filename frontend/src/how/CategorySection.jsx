export default function CategorySection() {
  const categories = [
    { name: "Hair care", icon: "/images/hair-care.png" },
    { name: "Skin care", icon: "/images/skin-care.png" },
    { name: "Lip stick", icon: "/images/lipstick.png" },
    { name: "Face Pack", icon: "/images/face-pack.png" },
    { name: "Blusher", icon: "/images/blusher.png" },
    { name: "Natural", icon: "/images/natural.png" },
    { name: "Body Care", icon: "/images/body-care.png" },
    { name: "Cheeks", icon: "/images/cheeks.png" },
    { name: "Eyes", icon: "/images/eyes.png" },
    { name: "Nails", icon: "/images/nails.png" },
  ]

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-serif mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {categories.map((category, index) => (
          <a key={index} href="#" className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center shadow-sm hover:shadow-md transition">
              <img src={category.icon || "/placeholder.svg"} alt={category.name} className="w-12 h-12 object-contain" />
            </div>
            <span className="mt-2 text-sm text-center">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
