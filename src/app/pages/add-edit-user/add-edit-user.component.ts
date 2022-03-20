import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/model/user.model';
import { ConfirmedValidator } from 'src/app/core/providers/customValidators.validator';
import { HttpServiceService } from 'src/app/core/services/http-service.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  
  
  submitted = false;
  userForm: FormGroup;
  userEmail: string;
  action: any;
  country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  city_list = ['Jaipur','Pune','Banglore','Mumbai','Delhi','Ahmdabad'];
  state_list = [ "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"]
  allUserList: User[];
  headeText: string;
  error: boolean =false;
    constructor(private formBuilder: FormBuilder,private router:Router,private _Activatedroute:ActivatedRoute,private _httpService:HttpServiceService) { }

    ngOnInit() {
      this.userEmail=this._Activatedroute.snapshot.paramMap.get("userEmail");
    this.action = this._Activatedroute.snapshot.paramMap.get("action");
    this.allUserList = this._httpService.getAllUsers();
    this.createForm()
    if(this.action == "add"){
      this.headeText = "Add User Details"
    }else{
      this.allUserList.forEach( (user, index) => {
        if(user.email === this.userEmail) {
          this.userForm.patchValue(user)
        }
      });
      
      this.headeText = "Edit User Details"
    }

    }
    createForm(){
      this.userForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        phone: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
        
        dob:['',[Validators.required]],
        password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
        confirmPassword: ['', [Validators.required]],
        address: this.formBuilder.group({
         country:['',[Validators.required]],
         city:['',[Validators.required]],
         state:['',[Validators.required]],
        })
    },
    
    {validator: ConfirmedValidator('password', 'confirmPassword')}
    );
    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }
    get addressControls(){
      return ((this.userForm.get('address') as FormGroup).controls)
      }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return false;
        }
        return true
        // display form values on success
    }
    onAdd(){
      this.error = false;
      if(this.onSubmit()){
        this.allUserList = this.allUserList || [];
        this.allUserList.forEach( (user, index) => {
          if(user.email ==this.userForm.get('email').value) {
            alert('User is Already Present');
            this.error = true
          }
        });
        if(this.error == false){
          this.allUserList.push(this.userForm.value)
          if(this._httpService.addUser(this.allUserList)){
              alert('User Added Successfully');
              this.router.navigate(['dashboard'])
          }else{
            alert('Somthing went wrong');
          }
        }
       
      }
    }
    onUpdate(element:User){
      if(this.onSubmit()){
        this.allUserList.forEach( (user, index) => {
          if(user.email === element.email){
            this.allUserList[index] = element;
          } 
        });
        if(this._httpService.editUser(this.allUserList)){
          alert("User Updated Successfully")
          this.router.navigate(['dashboard'])
        }
      }

    }

    onReset() {
        this.submitted = false;
        this.userForm.reset();
        this.router.navigate(['dashboard']);

    }

}


