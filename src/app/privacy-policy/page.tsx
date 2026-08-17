import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import LogoWatermark from "@/components/LogoWatermark";

export const metadata: Metadata = {
  title: "Privacy Policy | The Bridge Consulting and Advisory Limited",
  description:
    "How The Bridge Consulting and Advisory Limited collects, uses, and protects personal data, in accordance with UAE PDPL, Turkish KVKK, and applicable privacy regulations.",
};

const lastUpdated = "12 August 2026";

const enSections = [
  {
    title: "1. Introduction",
    body: [
      "The Bridge Consulting and Advisory Limited (\"The Bridge,\" \"we,\" \"us,\" or \"our\") is a GCC advisory firm licensed in Masdar City, Abu Dhabi, United Arab Emirates. This Privacy Policy explains how we collect, use, disclose, and protect personal data when you visit thebridgeconsulting.ae, register your organization with us, submit a contact inquiry, or otherwise interact with us.",
      "This Policy is issued in accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (\"PDPL\"), Turkish Law No. 6698 on the Protection of Personal Data (\"KVKK\"), and, where applicable to data subjects in the European Economic Area, the General Data Protection Regulation (\"GDPR\").",
    ],
  },
  {
    title: "2. Data Controller",
    body: [
      "The Bridge Consulting and Advisory Limited, registered in Masdar City Free Zone, Abu Dhabi, United Arab Emirates, is the data controller responsible for personal data processed through this website and our client registration and contact channels.",
    ],
  },
  {
    title: "3. Personal Data We Collect",
    body: [
      "We collect personal data that you provide directly to us, specifically:",
    ],
    list: [
      "Contact form: full name, organization, email address, segment, and the content of your message.",
      "Registration form: full name, organization, email address, phone number, country, segment, and segment-specific details you select or describe (for example, capability areas, sourcing categories, preferred regions, institution type, or localization priorities).",
      "Correspondence: any information you provide when you email us directly or otherwise communicate with our team.",
    ],
    footer: [
      "We do not collect sensitive personal data (such as health, biometric, or religious data) through this website, and we ask that you do not include such data in any form submission or message to us.",
    ],
  },
  {
    title: "4. Purpose and Legal Basis of Processing",
    body: [
      "We process your personal data for the following purposes, on the legal bases indicated:",
    ],
    list: [
      "To respond to inquiries and provide advisory information you request (legal basis: performance of pre-contractual steps taken at your request).",
      "To evaluate and process client registrations, and to route them to the appropriate advisory program (legal basis: performance of pre-contractual steps / legitimate interest in operating our advisory business).",
      "To maintain records of registrations and correspondence for our internal administration (legal basis: legitimate interest).",
      "To comply with applicable legal, regulatory, and licensing obligations in the UAE (legal basis: legal obligation).",
    ],
  },
  {
    title: "5. How We Share Your Data",
    body: [
      "We do not sell, rent, or trade personal data. We share personal data only with:",
    ],
    list: [
      "Service providers who process data on our behalf, specifically our database hosting provider (Neon, for storing client registration records) and our email provider (Google Workspace / Gmail, for sending and receiving correspondence and notifications).",
      "Regulatory or governmental authorities, where required by applicable law.",
    ],
    footer: [
      "Any third-party service provider we use is contractually and/or operationally required to protect your data and to process it only for the purposes we specify.",
    ],
  },
  {
    title: "6. International Data Transfers",
    body: [
      "Our service providers may process data on servers located outside the UAE. Where personal data is transferred internationally, we take reasonable steps to ensure it continues to benefit from an adequate level of protection, consistent with the requirements of the PDPL and, where applicable, KVKK and the GDPR.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain personal data for as long as necessary to fulfill the purposes described in this Policy, including to maintain business records and to comply with legal, accounting, or regulatory requirements. When personal data is no longer required for these purposes, we take reasonable steps to delete or anonymize it.",
    ],
  },
  {
    title: "8. Data Security",
    body: [
      "We apply reasonable technical and organizational measures designed to protect personal data against unauthorized access, disclosure, alteration, or destruction, including restricted access to our systems and secure transmission of form submissions.",
    ],
  },
  {
    title: "9. Cookies and Website Analytics",
    body: [
      "This website does not currently use tracking or advertising cookies, and we do not run third-party analytics on this site. If this changes in the future, we will update this Policy and, where required by law, seek your consent.",
    ],
  },
  {
    title: "10. Your Rights",
    body: [
      "Subject to applicable law (PDPL, and KVKK or GDPR where applicable to you), you have the right to:",
    ],
    list: [
      "Request access to the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your personal data, subject to our legal and legitimate business retention needs.",
      "Object to, or request restriction of, certain processing of your data.",
      "Request a copy of your data in a portable format, where applicable.",
      "Withdraw consent at any time, where processing is based on consent.",
    ],
    footer: [
      "To exercise any of these rights, contact us using the details in Section 13 below. We will respond to verified requests within the timeframes required by applicable law.",
    ],
  },
  {
    title: "11. Children's Privacy",
    body: [
      "This website and our services are intended for business and institutional audiences. We do not knowingly collect personal data from individuals under the age of 18.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The "last updated" date below reflects the most recent revision. Material changes will be reflected on this page.`,
    ],
  },
  {
    title: "13. Contact Us",
    body: [
      "For any questions about this Privacy Policy, or to exercise your data protection rights, please contact:",
    ],
    footer: [
      "privacy@thebridgeconsulting.ae",
      "The Bridge Consulting and Advisory Limited — Masdar City, Abu Dhabi, UAE",
    ],
  },
];

const trSections = [
  {
    title: "1. Giriş",
    body: [
      "The Bridge Consulting and Advisory Limited (\"The Bridge\", \"biz\", \"bize\" veya \"bizim\"), Abu Dhabi, Birleşik Arap Emirlikleri, Masdar City'de lisanslı bir GCC danışmanlık şirketidir. Bu Gizlilik Politikası, thebridgeconsulting.ae adresini ziyaret ettiğinizde, kuruluşunuzu bize kaydettirdiğinizde, iletişim formu gönderdiğinizde veya bizimle başka bir şekilde etkileşime girdiğinizde kişisel verilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar.",
      "Bu Politika; BAE 45 Sayılı 2021 tarihli Kişisel Verilerin Korunması Federal Kararname Kanunu (\"PDPL\"), 6698 Sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") ve uygulanabilir olduğu ölçüde Avrupa Ekonomik Alanı'ndaki veri sahipleri için Genel Veri Koruma Tüzüğü (\"GDPR\") uyarınca hazırlanmıştır.",
    ],
  },
  {
    title: "2. Veri Sorumlusu",
    body: [
      "Abu Dhabi, Masdar City Serbest Bölgesi'nde kayıtlı The Bridge Consulting and Advisory Limited, bu web sitesi ile müşteri kayıt ve iletişim kanallarımız aracılığıyla işlenen kişisel verilerden sorumlu veri sorumlusudur.",
    ],
  },
  {
    title: "3. Topladığımız Kişisel Veriler",
    body: ["Doğrudan bize sağladığınız aşağıdaki kişisel verileri topluyoruz:"],
    list: [
      "İletişim formu: ad soyad, kuruluş, e-posta adresi, segment ve mesajınızın içeriği.",
      "Kayıt formu: ad soyad, kuruluş, e-posta adresi, telefon numarası, ülke, segment ve seçtiğiniz veya belirttiğiniz segmente özgü detaylar (ör. yetkinlik alanları, tedarik kategorileri, tercih edilen bölgeler, kurum türü veya yerelleştirme öncelikleri).",
      "Yazışmalar: bize doğrudan e-posta gönderdiğinizde veya ekibimizle başka şekilde iletişim kurduğunuzda sağladığınız bilgiler.",
    ],
    footer: [
      "Bu web sitesi üzerinden hassas kişisel veri (sağlık, biyometrik veya dini veri gibi) toplamıyoruz; herhangi bir form veya mesajda bu tür verileri paylaşmamanızı rica ederiz.",
    ],
  },
  {
    title: "4. İşleme Amacı ve Hukuki Dayanak",
    body: ["Kişisel verilerinizi aşağıdaki amaçlarla, belirtilen hukuki dayanaklara göre işliyoruz:"],
    list: [
      "Taleplerinize yanıt vermek ve istediğiniz danışmanlık bilgisini sağlamak (hukuki dayanak: talebiniz üzerine sözleşme öncesi adımların yerine getirilmesi).",
      "Müşteri kayıtlarını değerlendirmek, işlemek ve uygun danışmanlık programına yönlendirmek (hukuki dayanak: sözleşme öncesi adımların yerine getirilmesi / danışmanlık faaliyetimizin yürütülmesindeki meşru menfaat).",
      "Kayıt ve yazışma kayıtlarını iç yönetim amacıyla tutmak (hukuki dayanak: meşru menfaat).",
      "BAE'de geçerli yasal, düzenleyici ve lisans yükümlülüklerine uymak (hukuki dayanak: hukuki yükümlülük).",
    ],
  },
  {
    title: "5. Verilerinizi Nasıl Paylaşıyoruz",
    body: ["Kişisel verileri satmıyor, kiralamıyor veya takas etmiyoruz. Kişisel verileri yalnızca şunlarla paylaşıyoruz:"],
    list: [
      "Bizim adımıza veri işleyen hizmet sağlayıcılar — özellikle veritabanı barındırma sağlayıcımız (Neon, müşteri kayıt kayıtlarının saklanması için) ve e-posta sağlayıcımız (Google Workspace / Gmail, yazışma ve bildirimlerin gönderilmesi/alınması için).",
      "Geçerli mevzuatın gerektirdiği hallerde düzenleyici veya resmi makamlar.",
    ],
    footer: [
      "Kullandığımız her üçüncü taraf hizmet sağlayıcı, verilerinizi korumak ve yalnızca belirttiğimiz amaçlarla işlemekle sözleşmesel ve/veya operasyonel olarak yükümlüdür.",
    ],
  },
  {
    title: "6. Uluslararası Veri Aktarımları",
    body: [
      "Hizmet sağlayıcılarımız verileri BAE dışında bulunan sunucularda işleyebilir. Kişisel veriler uluslararası olarak aktarıldığında, PDPL ve uygulanabilir olduğu ölçüde KVKK ve GDPR gerekliliklerine uygun olarak yeterli koruma düzeyinden faydalanmaya devam etmesi için makul adımlar atarız.",
    ],
  },
  {
    title: "7. Veri Saklama Süresi",
    body: [
      "Kişisel verileri, bu Politikada açıklanan amaçları yerine getirmek için gerekli olduğu sürece — ticari kayıtları tutmak ve yasal, muhasebe veya düzenleyici gereklilikleri karşılamak dahil — saklarız. Kişisel veriler bu amaçlar için artık gerekli olmadığında, verileri silmek veya anonimleştirmek için makul adımlar atarız.",
    ],
  },
  {
    title: "8. Veri Güvenliği",
    body: [
      "Kişisel verileri yetkisiz erişime, ifşaya, değiştirilmeye veya imhaya karşı korumak için tasarlanmış makul teknik ve organizasyonel önlemler uyguluyoruz; bu önlemler sistemlerimize erişimin kısıtlanmasını ve form gönderimlerinin güvenli iletimini içerir.",
    ],
  },
  {
    title: "9. Çerezler ve Web Sitesi Analitiği",
    body: [
      "Bu web sitesi şu anda izleme veya reklam çerezleri kullanmamaktadır ve bu sitede üçüncü taraf analitik araçları çalıştırmıyoruz. Bu durum gelecekte değişirse, bu Politikayı güncelleyecek ve yasanın gerektirdiği hallerde onayınızı alacağız.",
    ],
  },
  {
    title: "10. Haklarınız",
    body: ["Geçerli mevzuata (PDPL ve uygulanabilir olduğu ölçüde KVKK veya GDPR) tabi olarak aşağıdaki haklara sahipsiniz:"],
    list: [
      "Hakkınızda tuttuğumuz kişisel verilere erişim talep etme.",
      "Yanlış veya eksik verilerin düzeltilmesini talep etme.",
      "Yasal ve meşru ticari saklama gereksinimlerimize tabi olarak kişisel verilerinizin silinmesini talep etme.",
      "Verilerinizin belirli işlenmesine itiraz etme veya kısıtlanmasını talep etme.",
      "Uygulanabilir olduğu ölçüde, verilerinizin taşınabilir bir formatta bir kopyasını talep etme.",
      "İşleme onaya dayandığında, onayı istediğiniz zaman geri çekme.",
    ],
    footer: [
      "Bu haklardan herhangi birini kullanmak için, aşağıdaki 13. Bölümdeki bilgileri kullanarak bizimle iletişime geçin. Doğrulanmış taleplere geçerli mevzuatın gerektirdiği süreler içinde yanıt vereceğiz.",
    ],
  },
  {
    title: "11. Çocukların Gizliliği",
    body: [
      "Bu web sitesi ve hizmetlerimiz kurumsal ve kurumlar arası hedef kitleye yöneliktir. 18 yaşın altındaki bireylerden bilerek kişisel veri toplamıyoruz.",
    ],
  },
  {
    title: "12. Bu Politikadaki Değişiklikler",
    body: [
      "Uygulamalarımızdaki veya geçerli mevzuattaki değişiklikleri yansıtmak için bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Aşağıdaki \"son güncelleme\" tarihi en son revizyonu yansıtır. Önemli değişiklikler bu sayfada belirtilecektir.",
    ],
  },
  {
    title: "13. Bize Ulaşın",
    body: [
      "Bu Gizlilik Politikası hakkında sorularınız için veya veri koruma haklarınızı kullanmak için lütfen aşağıdaki adresle iletişime geçin:",
    ],
    footer: [
      "privacy@thebridgeconsulting.ae",
      "The Bridge Consulting and Advisory Limited — Masdar City, Abu Dhabi, UAE",
    ],
  },
];

function PolicySections({
  sections,
}: {
  sections: typeof enSections;
}) {
  return (
    <div className="space-y-14">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold uppercase tracking-[0.1em] text-black">
            {section.title}
          </h3>
          <div className="mt-4 space-y-4">
            {section.body.map((p, i) => (
              <p key={i} className="text-sm sm:text-base leading-relaxed text-black/70">
                {p}
              </p>
            ))}
          </div>
          {section.list && (
            <ul className="mt-4 space-y-3">
              {section.list.map((item) => (
                <li key={item} className="flex gap-3 text-sm sm:text-base leading-relaxed text-black/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-black" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.footer && (
            <div className="mt-4 space-y-1">
              {section.footer.map((p, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed text-black font-medium">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[280px] sm:h-[310px] lg:h-[340px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            Legal
          </p>
          <h1 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            How we collect, use, and protect your personal data — in English
            and Türkçe. Last updated {lastUpdated}.
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-6 flex flex-wrap gap-4 items-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
            Jump to
          </span>
          <a
            href="#en"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-black hover:underline"
          >
            English
          </a>
          <a
            href="#tr"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-black hover:underline"
          >
            Türkçe
          </a>
        </div>
      </section>

      <section id="en" className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24 scroll-mt-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-3">
            English
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
            Privacy Policy
          </h2>
          <p className="mt-4 text-sm text-black/50">Last updated: {lastUpdated}</p>
          <div className="mt-12">
            <PolicySections sections={enSections} />
          </div>
        </div>
      </section>

      <section id="tr" className="bg-black/[0.03] border-t border-black/10">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24 scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-3">
              Türkçe
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
              Gizlilik Politikası
            </h2>
            <p className="mt-4 text-sm text-black/50">Son güncelleme: {lastUpdated}</p>
            <div className="mt-12">
              <PolicySections sections={trSections} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide max-w-2xl mx-auto">
            Questions About Your Data?
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-black/60 leading-relaxed">
            Contact privacy@thebridgeconsulting.ae for any data protection
            inquiry or rights request.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
