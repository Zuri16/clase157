AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Torre Eiffel",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "Nueva York",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Elemento de borde
      const borde=this.createBorde(position, item.id)
      
      // Elemento de miniatura
      const miniatura=this.imagenMini(item)
      borde.appendChild(miniatura)
     
      // Elemento del texto del título
      const titulo=this.title(position, item)
      borde.appendChild(titulo)
      
      this.placesContainer.appendChild(borde);
    }
  },
  createBorde: function(position, id){
    const entidad_borde=document.createElement("a-entity")
    entidad_borde.setAttribute("id", id)
    entidad_borde.setAttribute("visible", true)
    entidad_borde.setAttribute("geometry", {
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    })
    entidad_borde.setAttribute("position", position)
    entidad_borde.setAttribute("material", {
      color:"#0077cc",
      opacity:1,
    })
    return entidad_borde
  },
  imagenMini:function(item){
    const entidadImage=document.createElement("a-entity")
    entidadImage.setAttribute("visible", true)
    entidadImage.setAttribute("geometry", {
      primitive:"circle",
      radius:9,
    })
    entidadImage.setAttribute("material", {
      src:item.url
    })
    return entidadImage
  },
  title:function(position, item){
    const entidadTitulo=document.createElement("a-entity")
    entidadTitulo.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width:70,
      color:"#e65100",
      value:item.title
    })
    const textoPos=position
    textoPos.y = -20
    entidadTitulo.setAttribute("position", textoPos)
    entidadTitulo.setAttribute("visible", true)
    return entidadTitulo
  }
  
});
