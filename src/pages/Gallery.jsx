function Gallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      title: "TechFest Event"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      title: "Technical Workshop"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "College Event"
    }
  ];

  return (
    <div>
      <h1>TechFest 2026 Gallery</h1>

      <div className="gallery">
        {images.map((image) => (
          <div className="gallery-card" key={image.id}>
            <img
              src={image.src}
              alt={image.title}
            />
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;