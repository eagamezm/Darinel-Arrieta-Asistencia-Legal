import { Component, OnDestroy, OnInit } from '@angular/core';
import { CONSTITUTION_ARTICLES, ConstitutionArticle } from '../../data/constitution-articles';

@Component({
  selector: 'app-constitution',
  standalone: true,
  templateUrl: './constitution.component.html',
  styleUrl: './constitution.component.scss'
})
export class ConstitutionComponent implements OnInit, OnDestroy {
  readonly officialSource = 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125';
  currentArticle: ConstitutionArticle = CONSTITUTION_ARTICLES[0];
  private timer?: ReturnType<typeof setInterval>;
  private previousNumber = 0;

  ngOnInit(): void {
    this.pickRandomArticle();
    this.timer = setInterval(() => this.pickRandomArticle(), 20000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  showNextArticle(): void { this.pickRandomArticle(); }

  private pickRandomArticle(): void {
    const candidates = CONSTITUTION_ARTICLES.filter(article => article.number !== this.previousNumber);
    const pool = candidates.length ? candidates : CONSTITUTION_ARTICLES;
    this.currentArticle = pool[Math.floor(Math.random() * pool.length)];
    this.previousNumber = this.currentArticle.number;
  }
}
