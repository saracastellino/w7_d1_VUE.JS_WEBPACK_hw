import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      steps: [
       "Remove all accessories from the wall", 
       "Lay down a drop cloth", 
       "Cover adjacent surfaces with painter’s tape", 
       "Roll the primer onto the wall", 
       "Paint at the trim by hand",
       "Paint the interior of the wall", 
       "Apply additional coats", 
       "Allow the paint to set up overnight" 
      ],
      newStep: ""
    },
    methods: {
      saveNewStep: function(){
        this.steps.push({
          action: this.newStep,
          Mario: false
        });
        this.newStep = "";
      },
      luigiDoesIt: function(index){
        this.steps[index].luigiDoesIt = true;
      }
    }
  });
});
