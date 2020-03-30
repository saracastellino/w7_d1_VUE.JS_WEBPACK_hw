import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      steps: [
       {action: "Remove all accessories from the wall", mario: true}, 
       {action: "Lay down a drop cloth", mario: true}, 
       {action: "Cover adjacent surfaces with painter’s tape", mario: false}, 
       {action: "Roll the primer onto the wall", mario: false}, 
       {action: "Paint at the trim by hand", mario: true},
       {action: "Paint the interior of the wall", mario: true}, 
       {action: "Apply additional coats", mario: true}, 
       {action: "Allow the paint to set up overnight", mario: true} 
      ],
      newStep: ""
    },
    methods: {
      saveNewStep: function(){
        this.steps.push({
          action: this.newStep,
          mario: true
        });
        this.newStep = "";
      },
      luigiDoesIt: function(index){
        this.steps[index].mario = false;
      }
    }
  });
});
