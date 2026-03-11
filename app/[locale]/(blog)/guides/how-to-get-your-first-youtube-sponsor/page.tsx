import { Metadata } from 'next'
import ArticleLayout from '@/components/seo/ArticleLayout'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isTR = locale === 'tr';
    return {
        title: isTR ? 'İlk YouTube Sponsorunuzu Nasıl Alırsınız (10 bin Abonenin Altında)' : 'How to Get Your First YouTube Sponsor (Under 10k Subs)',
        description: isTR 
            ? 'İlk ücretli YouTube marka anlaşmanızı güvence altına almak için gereken tam soğuk e-posta şablonlarını, etkileşim metriklerini ve satış stratejilerini öğrenin.'
            : 'Learn the exact cold-email templates, engagement metrics, and pitch strategies you need to secure your first paid YouTube brand deal.',
        openGraph: {
            title: isTR ? 'İlk YouTube Sponsorunuzu Nasıl Alırsınız' : 'How to Get Your First YouTube Sponsor',
            description: isTR 
                ? 'Markaların size gelmesini beklemeyi bırakın. İlk YouTube entegrasyonunuzu nasıl sunacağınızı ve fiyatlandıracağınızı öğrenin.'
                : 'Stop waiting for brands to come to you. Learn how to pitch and price your first YouTube integration.',
            url: 'https://infloura.com/guides/how-to-get-your-first-youtube-sponsor',
            type: 'article',
        }
    }
}

export default async function YouTubeSponsorGuide({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Guides' });
    const isTR = locale === 'tr';

    return (
        <ArticleLayout
            title={t('items.youtubeSponsor.title')}
            description={t('items.youtubeSponsor.description')}
            date={isTR ? "10 Mart 2026" : "March 10, 2026"}
            readTime={isTR ? "6 dk okuma" : "6 min read"}
            breadcrumbs={[
                { label: t('titleHighlight'), href: '/guides' },
                { label: isTR ? 'YouTube Gelir Elde Etme' : 'YouTube Monetization', href: '/guides/how-to-get-your-first-youtube-sponsor' }
            ]}
        >
            {isTR ? (
                <>
                    <h2>"Bekle ve Gör" Efsanesi</h2>
                    <p>
                        Yeni YouTuber'ların yaptığı en büyük hata, bir markanın kendilerine ödeme yapması için 100.000 aboneye ihtiyaçları olduğunu varsaymaktır. Gerçekte, içerik üretici ekonomisi ağır bir şekilde <strong>mikro-influencer'lara</strong> kaymıştır. Markalar, 5.000 yüksek etkileşimli, hiper-niş abonesi olan bir kanalın genellikle 1 milyon abonesi olan genel bir eğlence kanalından daha iyi dönüşüm sağladığını fark ediyor.
                    </p>
                    <p>
                        Size güvenen bir kitleniz varsa, bir işiniz var demektir. İşte markaların "Hakkında" sayfanızda e-postanızı bulmasını beklemeden ilk YouTube sponsorunuzu nasıl bulacağınız.
                    </p>

                    <h2>Adım 1: Gerçek Değerinizi Anlayın (Sadece İzlenme Değil)</h2>
                    <p>
                        Markalar izlenme satın almaz; güven ve dönüşüm satın alırlar. Bir markaya sunum yapmadan önce tam olarak ne sattığınızı bilmelisiniz. Belirli bir demografiye erişim satıyorsunuz.
                    </p>
                    <ul>
                        <li><strong>Nişinizi tanımlayın:</strong> "Teknoloji videoları çekiyorum" çok geniştir. "Yazılım mühendisleri için mekanik klavyeleri inceliyorum" ise yüksek oranda paraya dönüştürülebilir bir niştir.</li>
                        <li><strong>Ortalama izlenmenizi hesaplayın:</strong> 6 ay önceki viral videonuza bakmayın. Son 10 videonuza bakın, en yüksek ve en düşük performans gösteren aykırı değerleri çıkarın ve geri kalanının ortalamasını alın. Bu sizin <strong>Video Başına Ortalama İzlenmenizdir (AVV)</strong>.</li>
                        <li><strong>Demografinizi kontrol edin:</strong> İzleyicileriniz 13 yaşındakiler mi yoksa harcanabilir geliri olan 35 yaşındaki profesyoneller mi? İkincisi çok daha yüksek bir <Link href="/youtube-money-calculator">RPM (Bin Gösterim Başına Gelir)</Link> sağlar.</li>
                    </ul>

                    <div className="bg-white/5 border border-purple-500/20 p-6 rounded-2xl my-8">
                        <h4 className="text-purple-400 font-bold mb-2">💡 Profesyonel İpucu</h4>
                        <p className="m-0 text-sm">
                            Kanalınızın bir sponsor için gerçekten ne kadar değerli olduğundan emin değil misiniz? Ortalama izlenmenize ve nişinize göre tam bir dolar tutarı almak için ücretsiz <Link href="/youtube-money-calculator" className="text-white underline">Sponsorluk Oranı Hesaplayıcımızı</Link> kullanın.
                        </p>
                    </div>

                    <h2>Adım 2: 1 Sayfalık Medya Kiti Oluşturun</h2>
                    <p>
                        Medya kiti kanalınızın özgeçmişidir. 10 sayfalık bir PDF olmasına gerek yoktur. Aslında temiz, 1 sayfalık bir Canva şablonu veya bir Notion bağlantısı en iyisidir. Şunları içermelidir:
                    </p>
                    <ol>
                        <li><strong>Kanal Adınız ve Logonuz</strong></li>
                        <li><strong>Asansör Sunumu:</strong> Kim olduğunuzu ve sizi kimlerin izlediğini açıklayan tek bir cümle.</li>
                        <li><strong>Sert İstatistikler:</strong> Toplam Abone, Ortalama İzlenme (AVV) ve İzlenme Süresi.</li>
                        <li><strong>Hedef Kitle Demografisi:</strong> İlk 3 ülke, Yaş aralıkları ve Erkek/Kadın dağılımı.</li>
                        <li><strong>Geçmiş Performans:</strong> Daha önce bir satış ortaklığı (affiliate) entegrasyonu yaptıysanız, tıklama oranını gösterin!</li>
                    </ol>

                    <h2>Adım 3: Sunum Yapılacak Doğru Markaları Bulma</h2>
                    <p>
                        Nike veya Apple'a sunum yapmayın. Onlar sadece devasa ajanslarla çalışırlar. Siz <strong>Seri A veya B girişimlere</strong>, doğrudan tüketiciye (DTC) yönelik markalara veya sizden biraz daha büyük içerik üreticilerine sponsor olan şirketlere sunum yapmak istersiniz.
                    </p>

                    <h2>Adım 4: İşleyen Soğuk E-posta Şablonu</h2>
                    <p>
                        150 kelimenin altında tutun. Influencer Pazarlama Müdürleri günde yüzlerce e-posta alır. Kendi abone sayınıza değil, <em>onların</em> yatırım getirisine (ROI) odaklanarak sunumunuzu görmezden gelinmesi imkansız hale getirin.
                    </p>
                    
                    <pre className="bg-[#1e1e1e] p-6 rounded-xl overflow-x-auto border border-white/10 text-sm my-6">
                        <code>{`Konu: YouTube Entegrasyonu: [Marka Adı] x [Kanal Adınız]

Merhaba [İsim/Pazarlama Ekibi],

Son 3 aydır [Ürün]'ü kullanıyorum ve [Özellik] özelliği [Sorun]'umu tamamen çözdü.

[Sizin Nişiniz] odaklı, tam olarak bu sorunla karşılaşan hiper-etkileşimli bir kitleye sahip bir YouTube kanalı yönetiyorum.

Son 5 videom açıklama bağlantılarında [%X] tıklama oranıyla ortalama [Ortalama İzlenme] izlendi.

Şu anda önümüzdeki ay için içerik takvimimi planlıyorum ve [Marka] için özel bir 60 saniyelik entegrasyon çekmek isterim.

1 sayfalık medya kitimi aşağıya ekledim. Ekibinizin bu çeyrekte bir test kampanyası için kapasitesi var mı?

Saygılarımla,
[Adınız]
[Kanal Bağlantısı]`}</code>
                    </pre>

                    <h2>Adım 5: Entegrasyonunuzu Fiyatlandırma</h2>
                    <p>
                        Sektör standardı yaklaşık <strong>$15 - $25 CPV (İzlenme Başına Maliyet)</strong>'dir. Bu, video başına ortalama 10.000 izlenmeniz varsa, 60 saniyelik bir entegrasyon için 150 ile 250 dolar arasında ücret alabileceğiniz anlamına gelir. 
                    </p>
                </>
            ) : (
                <>
                    <h2>The "Wait and See" Myth</h2>
                    <p>
                        The biggest mistake new YouTubers make is assuming they need 100,000 subscribers before a brand will pay them. In reality, the creator economy has shifted heavily toward <strong>micro-influencers</strong>. Brands are realizing that a channel with 5,000 highly engaged, hyper-niche subscribers often converts better than a broad entertainment channel with 1 million subscribers.
                    </p>
                    <p>
                        If you have an audience that trusts you, you have a business. Here is how to secure your first YouTube sponsor without waiting for them to find your email in your "About" page.
                    </p>

                    <h2>Step 1: Understand Your True Value (It&apos;s Not Just Views)</h2>
                    <p>
                        Brands don&apos;t buy views; they buy trust and conversion. Before you pitch a brand, you need to know exactly what you are selling. You are selling access to a specific demographic.
                    </p>
                    <ul>
                        <li><strong>Define your niche:</strong> "I make tech videos" is too broad. "I review mechanical keyboards for software engineers" is highly monetizable.</li>
                        <li><strong>Calculate your average views:</strong> Do not look at your viral video from 6 months ago. Look at your last 10 videos, remove the highest and lowest performing outliers, and average the rest. That is your <strong>Average Views per Video (AVV)</strong>.</li>
                        <li><strong>Check your demographics:</strong> Are your viewers 13-year-olds or 35-year-old professionals with disposable income? The latter commands a much higher <Link href="/youtube-rpm-calculator">RPM (Revenue Per Mille)</Link>.</li>
                    </ul>

                    <div className="bg-white/5 border border-purple-500/20 p-6 rounded-2xl my-8">
                        <h4 className="text-purple-400 font-bold mb-2">💡 Pro Tip</h4>
                        <p className="m-0 text-sm">
                            Not sure what your channel is actually worth to a sponsor? Use our free <Link href="/youtube-money-calculator" className="text-white underline">Sponsorship Rate Calculator</Link> to get an exact dollar amount based on your average views and niche.
                        </p>
                    </div>

                    <h2>Step 2: Build a 1-Page Media Kit</h2>
                    <p>
                        A media kit is your channel&apos;s resume. It doesn&apos;t need to be a 10-page PDF. In fact, a clean, 1-page Canva template or a Notion link works best. It must include:
                    </p>
                    <ol>
                        <li><strong>Your Channel Name & Logo</strong></li>
                        <li><strong>The Elevator Pitch:</strong> One sentence explaining who you are and who watches you.</li>
                        <li><strong>The Hard Stats:</strong> Total Subscribers, Average Views (AVV), and Watch Time.</li>
                        <li><strong>Audience Demographics:</strong> Top 3 countries, Age ranges, and Male/Female split.</li>
                        <li><strong>Past Performance:</strong> If you&apos;ve done an affiliate link integration before, show the click-through rate!</li>
                    </ol>

                    <h2>Step 3: Finding the Right Brands to Pitch</h2>
                    <p>
                        Do not pitch Nike or Apple. They work exclusively through massive agency retainers. You want to pitch <strong>Series A or B startups</strong>, direct-to-consumer (DTC) brands, or companies that already sponsor creators slightly larger than you.
                    </p>

                    <h2>Step 4: The Cold Email Template That Works</h2>
                    <p>
                        Keep it under 150 words. Influencer Marketing Managers get hundreds of emails a day. Make your pitch impossible to ignore by focusing on <em>their</em> ROI, not your subscriber count.
                    </p>
                    
                    <pre className="bg-[#1e1e1e] p-6 rounded-xl overflow-x-auto border border-white/10 text-sm my-6">
                        <code>{`Subject: YouTube Integration: [Brand Name] x [Your Channel Name]

Hi [Name/Marketing Team],

I've been using [Product] for the last 3 months, and this specific feature [Feature] completely solved my [Pain Point]. 

I run a YouTube channel focused on [Your Niche] with a hyper-engaged audience that faces that exact same problem. 

My last 5 videos averaged [Average Views] views with a [X%] click-through rate on description links. 

I'm currently planning my content calendar for next month and would love to film a dedicated 60-second integration for [Brand]. 

I've attached my 1-page media kit below. Does your team have bandwidth for a test campaign this quarter?

Best,
[Your Name]
[Link to Channel]`}</code>
                    </pre>

                    <h2>Step 5: Pricing Your Integration</h2>
                    <p>
                        The industry standard baseline is roughly <strong>$15 to $25 CPV (Cost Per View)</strong>. This means if you average 10,000 views per video, you can charge between $150 and $250 for a 60-second integration. 
                    </p>
                </>
            )}
        </ArticleLayout>
    )
}
