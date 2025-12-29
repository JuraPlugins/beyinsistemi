export const brainRegions = [
  {
    id: 'prefrontal',
    name: 'Prefrontal Korteks',
    latinName: 'Prefrontal Cortex',
    color: '#FF6B6B',
    hoverColor: '#FF8E8E',
    function: 'Karar verme, planlama, sosyal davranış kontrolü ve kişilik ifadesi',
    selfPerceptionRole: 'Öz-değerlendirme ve öz-farkındalığın merkezi. "Ben kimim?" sorusunun cevabını oluşturur. Kendi düşüncelerimizi, duygularımızı ve davranışlarımızı değerlendirmemizi sağlar.',
    examples: [
      'Bir iş görüşmesinde "Acaba yeterince iyi performans gösterdim mi?" diye düşünmek',
      'Arkadaş grubunda kendinizi nasıl sunduğunuzu planlamak',
      'Gelecekteki hedeflerinizi hayal etmek ve kim olmak istediğinizi düşünmek',
      'Sosyal ortamlarda davranışlarınızı kontrol etmek'
    ],
    damageEffects: {
      title: 'Prefrontal Korteks Hasarı',
      symptoms: [
        'Kişilik değişiklikleri ve dürtü kontrolü kaybı',
        'Planlama ve karar verme güçlüğü',
        'Sosyal davranışlarda uygunsuzluk',
        'Duygusal düzensizlik ve irritabilite',
        'Motivasyon eksikliği (apati)'
      ],
      famousCases: [
        {
          name: 'Phineas Gage (1848)',
          description: 'Demiryolu işçisi Phineas Gage\'in kafasından demir çubuk geçti ve prefrontal korteksini hasar aldı. Kazadan önce sakin ve güvenilir olan Gage, sonrasında sabırsız, kaba ve dürtüsel biri haline geldi. Bu vaka, prefrontal korteksin kişilik üzerindeki etkisini ortaya koyan ilk önemli bulguydu.',
          year: 1848
        }
      ]
    },
    icon: '🧠'
  },
  {
    id: 'amygdala',
    name: 'Amigdala',
    latinName: 'Amygdala',
    color: '#4ECDC4',
    hoverColor: '#6EDAD3',
    function: 'Duygusal tepkiler, özellikle korku ve kaygı işleme',
    selfPerceptionRole: 'Duygusal benlik algısını şekillendirir. Tehdit algıladığında "savaş ya da kaç" tepkisini tetikler. Öz-saygı ve sosyal reddedilme korkusuyla yakından ilişkilidir.',
    examples: [
      'Bir sunum yaparken kalp çarpıntısı hissetmek',
      'Birisi sizi eleştirdiğinde hemen savunmacı olmak',
      'Sosyal ortamlarda reddedilme korkusu yaşamak',
      'Kötü bir anıyı hatırladığınızda hâlâ üzüntü hissetmek'
    ],
    damageEffects: {
      title: 'Amigdala Hasarı',
      symptoms: [
        'Korku tepkisinin kaybı veya azalması',
        'Tehlikeli durumları tanıyamama',
        'Yüz ifadelerinden duygu okumada zorluk',
        'Sosyal yargılamada bozukluk',
        'Duygusal anıların oluşturulmasında güçlük'
      ],
      famousCases: [
        {
          name: 'S.M. Vakası (Ürbach-Wiethe Hastalığı)',
          description: 'Nadir görülen Ürbach-Wiethe hastalığı nedeniyle her iki amigdalası hasar gören S.M., korku hissedemez hale geldi. Yılanlar, örümcekler veya korku filmleri onu etkilemiyordu. Tehlikeli durumlara karşı tamamen kayıtsız kaldı. Bu vaka korkunun amigdaladaki kökenini kanıtladı.',
          year: 1994
        }
      ]
    },
    icon: '💓'
  },
  {
    id: 'hippocampus',
    name: 'Hipokampüs',
    latinName: 'Hippocampus',
    color: '#45B7D1',
    hoverColor: '#68C7DC',
    function: 'Bellek oluşumu, öğrenme ve mekansal navigasyon',
    selfPerceptionRole: 'Otobiyografik belleğin merkezi. "Ben" hikayemizi oluşturur - geçmiş deneyimlerimizi, anılarımızı ve yaşam öykümüzü saklar. Kim olduğumuzu geçmişimizle bağlar.',
    examples: [
      'Çocukluk anılarınızı hatırlamak ve bunların sizi nasıl şekillendirdiğini düşünmek',
      '"İlk aşkımı hâlâ hatırlıyorum" demek',
      'Ailenizle geçirdiğiniz özel anları anımsamak',
      'Geçmiş başarı ve başarısızlıklarınızdan ders çıkarmak'
    ],
    damageEffects: {
      title: 'Hipokampüs Hasarı',
      symptoms: [
        'Yeni anılar oluşturamama (anterograd amnezi)',
        'Geçmiş anıları hatırlamada zorluk (retrograd amnezi)',
        'Mekansal oryantasyon bozukluğu (kaybolma)',
        'Öğrenme güçlüğü',
        'Zaman algısında bozukluk'
      ],
      famousCases: [
        {
          name: 'Henry Molaison (H.M.) (1953)',
          description: 'Epilepsi tedavisi için hipokampüsü cerrahi olarak alınan Henry Molaison, operasyondan sonra yeni anı oluşturamaz hale geldi. Her gün tanıştığı insanları bir sonraki gün tanıyamıyordu. 55 yıl boyunca sürekli "şimdi"de yaşadı. Bu vaka hipokampüsün bellek oluşumundaki kritik rolünü ortaya koydu.',
          year: 1953
        },
        {
          name: 'Clive Wearing (1985)',
          description: 'Viral ensefalit sonucu hipokampüsü hasar gören İngiliz müzisyen, sadece 7-30 saniyelik belleğe sahip oldu. Her an "uyandığını" düşünüyor ve günlüğüne sürekli aynı cümleleri yazıyor. Eşini her gördüğünde onu ilk kez görüyormuş gibi seviniyordu.',
          year: 1985
        }
      ]
    },
    icon: '📚'
  },
  {
    id: 'temporal',
    name: 'Temporal Lob',
    latinName: 'Temporal Lobe',
    color: '#96CEB4',
    hoverColor: '#AED9C4',
    function: 'İşitsel işleme, dil anlama ve yüz tanıma',
    selfPerceptionRole: 'Sosyal benlik algısı için kritik. Başkalarının bizi nasıl gördüğünü anlamamızı, ses tonundan duyguları algılamamızı ve sosyal ipuçlarını okumamızı sağlar.',
    examples: [
      'Birinin ses tonundan size kızgın olduğunu anlamak',
      'Grup sohbetinde konuşmaları takip etmek ve ne zaman söz alacağınızı bilmek',
      'Bir arkadaşınızın yüz ifadesinden mutsuz olduğunu fark etmek',
      'Sosyal ortamlarda "hava"yı okumak'
    ],
    damageEffects: {
      title: 'Temporal Lob Hasarı',
      symptoms: [
        'Dil anlama güçlüğü (Wernicke afazisi)',
        'Yüz tanıma bozukluğu (prosopagnozi)',
        'İşitsel algı problemleri',
        'Görsel nesne tanımada zorluk',
        'Müzik algısında bozukluk (amuzi)'
      ],
      famousCases: [
        {
          name: 'Dr. P (Karısını Şapka Sanan Adam)',
          description: 'Nörolog Oliver Sacks\'ın ünlü vakası Dr. P, temporal lob hasarı nedeniyle nesneleri ve yüzleri tanıyamıyordu. Karısının başını bir şapka zannedip kaldırmaya çalıştı. Müziği mükemmel anlıyor ama görsel dünyayı yorumlayamıyordu.',
          year: 1985
        }
      ]
    },
    icon: '👂'
  },
  {
    id: 'parietal',
    name: 'Parietal Lob',
    latinName: 'Parietal Lobe',
    color: '#FFEAA7',
    hoverColor: '#FFEFBC',
    function: 'Mekansal farkındalık, dokunma algısı ve beden koordinasyonu',
    selfPerceptionRole: 'Bedensel benlik algısının merkezi. Bedenimizin sınırlarını, fiziksel varlığımızı ve çevremizdeki yerimizi algılamamızı sağlar. "Bedenim nerede bitiyor, dünya nerede başlıyor?" sorusunu cevaplar.',
    examples: [
      'Gözleriniz kapalıyken kolunuzun nerede olduğunu hissetmek',
      'Aynadaki yansımanızı kendiniz olarak tanımak',
      'Kilo aldığınızda veya verdiğinizde beden imajınızın değişmesi',
      'Sports yaparken vücudunuzun koordinasyonunu sağlamak'
    ],
    damageEffects: {
      title: 'Parietal Lob Hasarı',
      symptoms: [
        'Hemineglekt (vücudun/uzayın yarısını görmezden gelme)',
        'Beden algısında bozukluk',
        'Matematik ve hesaplama güçlüğü',
        'Yazma güçlüğü (agrafi)',
        'Sağ-sol karıştırma'
      ],
      famousCases: [
        {
          name: 'Hemineglekt Vakaları',
          description: 'Sağ parietal lob hasarı olan hastalar, sol taraflarını tamamen görmezden gelebilir. Tabağın sadece sağ yarısındaki yemeği yer, yüzün sadece sağ yarısını tıraş eder, saatin sadece sağ yarısındaki rakamları çizerler. Görme yeteneği sağlam olsa da beyin sol tarafı "görmez".',
          year: null
        }
      ]
    },
    icon: '🤸'
  },
  {
    id: 'insula',
    name: 'İnsula',
    latinName: 'Insular Cortex',
    color: '#DDA0DD',
    hoverColor: '#E8B8E8',
    function: 'İç organ duyuları, tat algısı ve duygusal farkındalık',
    selfPerceptionRole: 'İçsel benlik algısının merkezi. Kalp atışı, nefes, açlık gibi bedensel duyumları algılar. Empati ve duygusal farkındalık için kritik. "İçimde ne hissediyorum?" sorusunu cevaplar.',
    examples: [
      'Heyecanlandığınızda midenizde kelebekleri hissetmek',
      'Stresli olduğunuzda kalp atışınızın hızlandığını fark etmek',
      'Birinin acısını gördüğünüzde empati duymak',
      '"Bir şeyler yanlış" diye sezgisel bir his almak'
    ],
    damageEffects: {
      title: 'İnsula Hasarı',
      symptoms: [
        'İç beden farkındalığının kaybı (interoception)',
        'Empati ve duygusal anlayış eksikliği',
        'Tat algısında bozukluk',
        'Bağımlılık döngülerinde bozulma',
        'Ağrı algısında değişiklik'
      ],
      famousCases: [
        {
          name: 'Bağımlılık ve İnsula Araştırmaları',
          description: 'İnsula hasarı olan sigara bağımlılarının, hiçbir çaba göstermeden aniden sigarayı bıraktığı keşfedildi. İnsula, bağımlılık hissini ve "istek" duygusunu işlediği için hasarı bu güçlü dürtüyü ortadan kaldırdı. Bu bulgu bağımlılık tedavisinde yeni kapılar açtı.',
          year: 2007
        }
      ]
    },
    icon: '💫'
  }
];
