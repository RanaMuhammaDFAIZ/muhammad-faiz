class RailwayForm {
    constructor(givenname, trainno , Address){
        console.log("Constructor called....." + givenname + " " + trainno)
            this.name = givenname
            this.trainno = trainno
            this.Address = Address
    }
    pervious() {
      alert(this.name + ": Your form is  for train number: " + this.trainno +  " and  your  Address is " + this.Address)
    }
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
      this.trainno = 0
    }
  }

    let faiz = new RailwayForm ("Faiz", 123456,"209 ,  Phatk , fasalbad-Pakistan ")
    faiz.pervious()
    faiz.submit()
    faiz.cancel()
    faiz.pervious()