import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmojiRating, FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  emojiRatings: Array<EmojiRating> = [];
  feedbackForm!: FormGroup;

  constructor (
    private feedbackService: FeedbackService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.emojiRatings = this.feedbackService.getEmojiRatings();
    this.populateFeedbackForm();
  }

  populateFeedbackForm(): void {
    this.feedbackForm = this.fb.group({
      'question1': ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.feedbackForm.value);
  }

}
