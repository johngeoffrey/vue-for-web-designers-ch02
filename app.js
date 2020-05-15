(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors,
      selectedColor: "blue"
    },
    computed: {
      sizeClass: function() {
        return 'product-size--' + this.selectedSize.toString().replace('.', '_');
      },
      imageColorSrc: function() {
        return "../../../assets/" + this.selectedColor + ".jpg";
      }
    },
    methods: {
      updateColorsBySize: function(evt){
        var selectedSize = evt.target.value,
            availableColors = window.Inventory.bySize[selectedSize];

        this.colors = availableColors;
        if (availableColors.indexOf(this.selectedColor) == -1)
        {
          this.selectedColor = availableColors[0];
        }
      },
      updateSizesByColor: function(evt) {

        var selectedColor= evt.target.value,
            availableSizes = window.Inventory.byColor(selectedColor);


        this.size = availableSizes;

        this.sizes = window.Inventory.byColor[evt.target.value];
        if (availableSizes.indexOf(this.selectedSize) == -1)
        {
          this.selectedSize = availableSizes[0];
        }
      }
    }
  })

})();
