import { Component, OnInit } from '@angular/core';
import { EmojiRating, FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  emojiRatings: Array<EmojiRating> = [];

  constructor (
    private feedbackService: FeedbackService
  ) {}
  ngOnInit(): void {
    this.emojiRatings = this.feedbackService.getEmojiRatings();
    console.log(this.emojiRatings);
  }

}
