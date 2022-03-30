AFRAME.registerComponent("poster",{
    init:function(){
        this.posterContainer=this.el
        this.createCards()
    },
    //A function to create thumbnails with comics as a list and set their position
    createCards:function(){
        const thumbnailRef=[
            {
             id:"super-man",
             title:"Super Man",
             url:"../assets/thumbnails/SuperMan.jpg"   
            },
            {
             id:"spider-man",
             title:"Spider Man",
             url:"../assets/thumbnails/spiderman.jpg"
            },
            {
             id:"captain-aero-comics",
             title:"Captain Aero Comics",
             url:"../assets/thumbnails/captainAeroComics.jpg"
            },
            {
             id:"outer-space",
             title:"Outer Space",
             url:"../assets/thumbnails/outerSpace.jpg"
            },
        ]
        let previousXposition = -60;

        for (var item of thumbnailRef){
            const posX=previousXposition+25
            const posY=10
            const posZ=-40;
            const position={x:posX,y:posY,z:posZ};
            previousXposition=posX

            //border element
            const borderEl=this.createBorder(position,item.id);
            
            //thumbnail
            const thumbnailEl=this.createThumbnail(item);
            borderEl.appendChild(thumbnailEl)

            this.posterContainer.appendChild(borderEl)
        }

    },

    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:22,
            height:40,
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"white",
            opacity:1,
        })
        entityEl.setAttribute("cursor-listener",{})
        return entityEl
    },
    
    createThumbnail:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:28
        })
        entityEl.setAttribute("position",{x:0,y:5,z:0.1})
        entityEl.setAttribute("material",{src:item.url});
        return entityEl
    }
})