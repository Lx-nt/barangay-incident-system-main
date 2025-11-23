import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-report.html',
  styleUrls: ['./add-report.css']
})
export class AddReportComponent {
  currentStep = 1;
  incidentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.incidentForm = this.fb.group({
      reporterName: ['', Validators.required],
      contactInfo: ['', Validators.required],
      incidentType: ['', Validators.required],
      incidentDate: ['', Validators.required],
      incidentTime: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  submitReport() {
    if (this.incidentForm.valid) {
      console.log('Report submitted:', this.incidentForm.value);
      alert('Report submitted successfully!');
      // Reset form and go back to step 1
      this.incidentForm.reset();
      this.currentStep = 1;
    }
  }
}