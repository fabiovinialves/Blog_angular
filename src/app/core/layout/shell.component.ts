import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-shell">
      <div class="app-shell__bg app-shell__bg--left"></div>
      <div class="app-shell__bg app-shell__bg--right"></div>

      <main class="app-shell__content container">
        <section class="app-shell__surface surface-card">
          <router-outlet></router-outlet>
        </section>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }

      .app-shell {
        position: relative;
        min-height: 100vh;
        padding: 28px 0 40px;
        overflow: hidden;
      }

      .app-shell__content {
        position: relative;
        z-index: 2;
      }

      .app-shell__surface {
        overflow: hidden;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(245, 243, 240, 0.94));
      }

      .app-shell__bg {
        position: absolute;
        inset: auto;
        z-index: 1;
        width: 360px;
        height: 360px;
        border-radius: 50%;
        filter: blur(36px);
        opacity: 0.72;
        pointer-events: none;
      }

      .app-shell__bg--left {
        left: -120px;
        bottom: 180px;
        background:
          radial-gradient(circle, rgba(126, 81, 57, 0.52), rgba(126, 81, 57, 0));
      }

      .app-shell__bg--right {
        right: -120px;
        top: 140px;
        background:
          radial-gradient(circle, rgba(246, 185, 132, 0.48), rgba(246, 185, 132, 0));
      }

      @media (max-width: 900px) {
        .app-shell {
          padding-top: 16px;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {}
