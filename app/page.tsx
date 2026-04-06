"use client";

import "swiper/css";
import styles from "../app/home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.title}>
            Практик ресторанного бізнесу, яка формує <span className={styles.highlight}>новий рівень</span> індустрії
          </div>

          <div className={styles.headerDescriptionContainer}>
            <p className={styles.description}>
              15 років у ресторанному бізнесі Києва, Одеси та Львова.<br/>
              Керую процесами і командами, поєднуючи операційку та маркетинг
              у цілісну систему. Забезпечую порядок, який формує повагу до закладу.
            </p>

            <button className={styles.button}>
              Дізнатись більше
            </button>
          </div>
        </div>

        <div className={styles.whatAmIGoodFor}>
          <h2 className={styles.sectionTitle}>
            Чим я можу <span className={styles.highlight}>бути корисна</span>
          </h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.number}> <span className={styles.highlight}>01</span></span>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Власникам і керівникам закладів
                </h3>
                <p className={styles.cardText}>
                  Коли в ресторані постійний хаос, команда працює “як вийде”, а результат нестабільний — я вибудовую чітку систему процесів, ролей і контролю.<br/>
                  Щоб заклад працював передбачувано, без ручного управління і постійного стресу.  
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <span className={styles.number}><span className={styles.highlight}>02</span></span>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Командам і тим, хто в професії
                </h3>
                <p className={styles.cardText}>
                  Коли немає чітких стандартів, мотивації і розуміння, як має виглядати сильний сервіс — я даю практичні інструменти, навчання і гайд, які можна одразу застосувати в роботі.<br/>
                  Щоб люди в залі не “обслуговували”, а створювали досвід, за який повертаються.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <span className={styles.number}><span className={styles.highlight}>03</span></span>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Ресторанній сфері як індустрії
                </h3>
                <p className={styles.cardText}>
                  Працюю з культурою ресторанного бізнесу — через системи, підходи і мислення, які формують порядок і повагу до цієї професії.<br/>
                  Показую, що ресторан — це не хаос і не “якось буде”, а складна, сильна і керована індустрія.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutMeSection}>
        <div className="container">
          <div className={styles.aboutMe}>
            <div className={styles.aboutMeTitle}>Про мене</div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 11000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              touchStartPreventDefault={false}
            >

                <SwiperSlide>
                  <div className={styles.slide}>
                  15 років у ресторанному бізнесі — Київ, Одеса, Львів.<br/>
                  Я працюю всередині процесів: з командами, операційкою і маркетингом, де або все працює разом — або розвалюється.
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.slide}>
                    Я не про окремі інструменти.<br/>
                    Я про те, як виглядає ресторан в реальності:<br/>
                    коли команда не розуміє ролей, сервіс залежить від настрою, а маркетинг живе окремим життям.
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.slide}>
                    Я заходжу туди, де це “якось працює”,<br/>
                    і роблю так, щоб почало працювати чітко.
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.slide}>
                    Мій фокус — порядок.<br/>
                    Бо саме він формує повагу: до закладу, до команди і до самої ресторанної справи.
                  </div>
                </SwiperSlide>

              </Swiper>
          </div>
        </div>
      </div>
{/* 
      <div className="container">
        <div className={styles.philosophy}>
          <h2 className={styles.philosophyTitle}>
            РЕСТОРАН — ЦЕ НЕ ПРО <span className={styles.highlight}>“ЯК ВИЙДЕ”</span>
          </h2>

          <div className={styles.philosophyContent}>
            <p className={styles.lead}>
              Ресторан — це завжди система.<br/>
              Питання тільки в тому, вона керована чи випадкова.
            </p>

            <p>
              Коли немає структури — починається хаос:<br/>
              в процесах, у команді, в сервісі, в маркетингу.
            </p>

            <p className={styles.accent}>
              І це завжди відчуває гість.
            </p>

            <p>
              Я працюю з основою:<br/>
              вибудовую процеси, які не суперечать одне одному,<br/>
              команду, яка розуміє, що вона робить і навіщо,<br/>
              і маркетинг, який підсилює реальність, а не прикриває її.
            </p>

            <p className={styles.result}>
              У результаті з’являється головне —<br/>
              відчуття рівня і контроль, який не потрібно тримати вручну
            </p>
          </div>
        </div>

        <div className={styles.formats}>
          <div className={styles.formatsTitle}>
            Формати роботи
          </div>

          <div className={styles.formatsGrid}>

            <div className={styles.formatsCard}>
              <div className={styles.formatsCardTitle}>
                Консультація для власника / керівника
              </div>

              <div className={styles.formatsCardDescription}>
                Коли є відчуття, що в закладі щось не працює:
                процеси розмиті, команда нестабільна, сервіс не тримає рівень.
                Ми розбираємо ситуацію по ключових точках — без води і загальних фраз.
              </div>

              <div className={styles.formatsCardList}>
                <span>Підійде:</span>
                <ul>
                  <li>власникам закладів</li>
                  <li>керівникам</li>
                  <li>тим, хто хоче навести порядок в процесах</li>
                </ul>
              </div>

              <div className={styles.formatsCardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>формат</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>онлайн - <br/>консультація</span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>вартість</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>150$</span>
                </div>
              </div>

              <button className={styles.button}>
                Обговорити співпрацю
              </button>
            </div>

            <div className={styles.formatsCard}>
              <div className={styles.formatsCardTitle}>
                Системна робота з закладом
              </div>

              <div className={styles.formatsCardDescription}>
                Коли потрібні не поради, а реальні зміни.
                Я заходжу в роботу закладу і допомагаю вибудувати систему,
                яка тримає сервіс і команду на рівні.
              </div>

              <div className={styles.formatsCardList}>
                <span>Що включає:</span>
                <ul>
                  <li>процеси і ролі в команді</li>
                  <li>стандарти сервісу</li>
                  <li>взаємодію між працівниками</li>
                  <li>маркетинг, який підсилює результат</li>
                </ul>
              </div>

              <div className={styles.formatsCardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>формат</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>індивідуальна<br/>робота</span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>вартість</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>обговорюється</span>
                </div>
              </div>

              <button className={styles.button}>
                Обговорити співпрацю
              </button>
            </div>

            <div className={styles.formatsCard}>
              <div className={styles.formatsCardTitle}>
                Консультація для працівників
              </div>

              <div className={styles.formatsCardDescription}>
                Для тих, хто хоче рости в ресторанній сфері
                і працювати на іншому рівні — не просто виконувати,
                а розуміти сервіс глибше.
              </div>

              <div className={styles.formatsCardList}>
                <span>Розбираємо:</span>
                <ul>
                  <li>як ти працюєш зараз</li>
                  <li>де втрачаєш гостя</li>
                  <li>як підсилити комунікацію</li>
                </ul>
              </div>

              <div className={styles.formatsCardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>формат</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>онлайн</span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>вартість</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>50$</span>
                </div>
              </div>

              <button className={styles.button}>
                Обговорити співпрацю
              </button>
            </div>

            <div className={styles.formatsCard}>
              <div className={styles.formatsCardTitle}>
                Гайд по сервісу
              </div>

              <div className={styles.formatsCardDescription}>
                Для тих, хто хоче зрозуміти сервіс глибше — без складних схем і теорії.
                Про увагу до деталей, поведінку в залі і відчуття гостя,
                яке формується в кожному контакті.
              </div>

              <div className={styles.formatsCardList}>
                <span>Підійде:</span>
                <ul>
                  <li>офіціантам</li>
                  <li>адміністраторам</li>
                  <li>власникам</li>
                </ul>
              </div>

              <div className={styles.formatsCardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>формат</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>PDF</span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>вартість</span>
                  <span className={styles.metaDot}>-</span>
                  <span className={styles.metaValue}>500 грн</span>
                </div>
              </div>

              <button className={styles.button}>
                Отримати гайд
              </button>
            </div>

          </div>
        </div>
      </div>










      <div className={styles.contactFormSectionBackGround}>
        <div className="container">
          <div className={styles.contactFormSection}>

            <div className={styles.contactInfo}>
              <div className={styles.contactBadge}>ЗАПИТ НА РОБОТУ</div>

              <h2 className={styles.contactTitle}>
                Якщо відчуваєш, що це <span className={styles.highlight}>про тебе</span>
              </h2>

              <p className={styles.contactText}>
                Опиши коротко ситуацію — я подивлюсь і дам відповідь, чим можу бути корисною.
              </p>

              <div className={styles.contactNote}>
                Працюю з обмеженою кількістю запитів.
              </div>
            </div>

            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <input type="text" name="name" placeholder="Ім’я" required />
                <input type="text" name="contact" placeholder="Телефон / Telegram" required />
              </div>

              <input type="text" name="city" placeholder="Місто" required />

              <select name="interest" required>
                <option value="">Оберіть формат</option>
                <option value="owner-consultation">Консультація для власника / керівника</option>
                <option value="system-work">Системна робота з закладом</option>
                <option value="staff-consultation">Консультація для працівників</option>
                <option value="staff-consultation">Гайд по сервісу</option>
              </select>

              <textarea
                name="situation"
                placeholder="Що зараз не працює? З чим хочеш розібратись?"
                rows={4}
              />

              <input type="url" name="link" placeholder="Посилання на заклад / Instagram" />

              <button type="submit" className={styles.submitButton}>
                Надіслати запит
              </button>

              <p className={styles.smallText}>
                Відповідаю особисто
              </p>
            </form>

          </div>
        </div>
      </div> */}
    </>
  );
}
