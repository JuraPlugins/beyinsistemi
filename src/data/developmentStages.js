export const developmentStages = [
    {
        id: 'infancy',
        name: 'Bebeklik',
        ageRange: '0-2 yaş',
        minAge: 0,
        maxAge: 2,
        color: '#87CEEB',
        icon: '🍼',
        description: 'Temel güven duygusunun oluştuğu dönem',
        psychologicalDevelopment: [
            'Temel Güven vs. Güvensizlik (Erikson): Bebekler bakım verenlerine bağlı olarak dünyaya güven ya da güvensizlik geliştirir.',
            'Duyusal-Motor Dönem (Piaget): Bebekler dünyayı duyuları ve hareketleri ile keşfeder.',
            'Bağlanma (Bowlby): Anne-bebek arasında güvenli bağlanma kurulur.',
            'Nesne Sürekliliği: Görünmeyen nesnelerin var olmaya devam ettiğini öğrenir.',
            'İlk sözcükler ve temel iletişim becerileri gelişir.'
        ],
        keyMilestones: ['İlk gülümseme', 'İlk adım', 'İlk sözcük', 'Ayrılık kaygısı']
    },
    {
        id: 'early-childhood',
        name: 'İlk Çocukluk',
        ageRange: '2-6 yaş',
        minAge: 2,
        maxAge: 6,
        color: '#90EE90',
        icon: '🧒',
        description: 'Özerklik ve inisiyatif gelişimi',
        psychologicalDevelopment: [
            'Özerklik vs. Utanç/Şüphe (2-3 yaş): Çocuklar bağımsızlık kazanmaya çalışır.',
            'İnisiyatif vs. Suçluluk (3-6 yaş): Amaçlı davranışlar başlatmaya başlar.',
            'İşlem Öncesi Dönem (Piaget): Sembolik düşünce ve hayal gücü gelişir.',
            'Benmerkezci Düşünce: Başkalarının bakış açısını anlamakta güçlük.',
            'Oyun yoluyla öğrenme ve sosyal becerilerin temeli atılır.',
            'Cinsiyet kimliği farkındalığı başlar.'
        ],
        keyMilestones: ['Tuvalet eğitimi', 'Oyun arkadaşlığı', 'Hayal dünyası', 'Temel kuralları öğrenme']
    },
    {
        id: 'middle-childhood',
        name: 'Orta Çocukluk',
        ageRange: '6-11 yaş',
        minAge: 6,
        maxAge: 11,
        color: '#FFA500',
        icon: '📚',
        description: 'Yetkinlik ve akademik becerilerin gelişimi',
        psychologicalDevelopment: [
            'Çalışkanlık vs. Aşağılık Duygusu (Erikson): Başarı duygusu veya yetersizlik hissi gelişir.',
            'Somut İşlemler Dönemi (Piaget): Mantıksal düşünme başlar, ancak soyut kavramlarla sınırlıdır.',
            'Sosyal karşılaştırma ve rekabet başlar.',
            'Arkadaşlık ilişkileri derinleşir, "en iyi arkadaş" kavramı oluşur.',
            'Okul başarısı öz-değeri etkiler.',
            'Ahlaki gelişim: Kuralların nedenlerini sorgulamaya başlar.'
        ],
        keyMilestones: ['Okuma-yazma', 'Takım oyunları', 'Sorumluluk alma', 'Hobi geliştirme']
    },
    {
        id: 'pre-adolescence',
        name: 'Ergenliğe Geçiş',
        ageRange: '11-13 yaş',
        minAge: 11,
        maxAge: 13,
        color: '#9370DB',
        icon: '🌊',
        description: 'Fiziksel ve duygusal değişimlerin başlangıcı',
        psychologicalDevelopment: [
            'Ergenlik öncesi hormonal değişimler başlar.',
            'Beden imajı endişeleri ortaya çıkar.',
            'Ebeveynlerden duygusal uzaklaşma başlar.',
            'Akran grubu önemi artar.',
            'Soyut düşünme becerileri gelişmeye başlar.',
            'Kimlik sorgulamasının ilk işaretleri görülür.',
            'Duygusal dalgalanmalar yaşanır.'
        ],
        keyMilestones: ['Puberte başlangıcı', 'Akran baskısı farkındalığı', 'Gizlilik ihtiyacı', 'İlk aşklar']
    },
    {
        id: 'adolescence',
        name: 'Ergenlik',
        ageRange: '13-18 yaş',
        minAge: 13,
        maxAge: 18,
        color: '#FF6347',
        icon: '🔥',
        description: 'Kimlik arayışı ve bağımsızlık mücadelesi',
        psychologicalDevelopment: [
            'Kimlik vs. Rol Karmaşası (Erikson): "Ben kimim?" sorusu merkeze alınır.',
            'Soyut İşlemler Dönemi (Piaget): Hipotetik ve idealist düşünce gelişir.',
            'Kişisel efsane: "Hiç kimse beni anlamıyor" hissi.',
            'Hayali seyirci: Herkesin kendisini izlediği yanılgısı.',
            'Risk alma davranışları artar.',
            'Romantik ilişkiler ve cinsel kimlik gelişimi.',
            'Gelecek planları ve kariyer düşünceleri başlar.',
            'Ebeveynlerle çatışmalar yoğunlaşabilir.'
        ],
        keyMilestones: ['İlk ciddi ilişki', 'Kariyer hedefleri', 'Değer sistemi oluşturma', 'Bağımsızlık kazanma']
    },
    {
        id: 'emerging-adulthood',
        name: 'Beliren Yetişkinlik',
        ageRange: '18-25 yaş',
        minAge: 18,
        maxAge: 25,
        color: '#FF69B4',
        icon: '🌸',
        description: 'Kimlik keşfi ve yaşam yolu belirleme',
        psychologicalDevelopment: [
            'Yakınlık vs. Yalıtılmışlık (Erikson): Derin ilişkiler kurma çabası.',
            'Kimlik keşfinin devamı - iş, ilişki, değerler.',
            'İstikrarsızlık dönemi: Sık değişen yaşam koşulları.',
            'Olasılıklara odaklanma: Hayatta birçok seçenek var hissi.',
            'Aradalık hissi: Ne tam ergen ne tam yetişkin.',
            'Öz-odaklılık: Kendini keşfetme zamanı.',
            'Beyin gelişimi devam eder (prefrontal korteks 25 yaşına kadar olgunlaşır).'
        ],
        keyMilestones: ['Üniversite/İş hayatı', 'İlk bağımsız yaşam', 'Uzun vadeli ilişkiler', 'Finansal bağımsızlık']
    },
    {
        id: 'early-adulthood',
        name: 'Genç Yetişkinlik',
        ageRange: '25-40 yaş',
        minAge: 25,
        maxAge: 40,
        color: '#4169E1',
        icon: '💼',
        description: 'Kariyer kurma ve aile oluşturma',
        psychologicalDevelopment: [
            'Yakınlık vs. Yalıtılmışlık devam eder: Evlilik, ebeveynlik kararları.',
            'Kariyer kimliği oluşur ve pekişir.',
            'Üretkenlik ihtiyacı: Topluma katkı isteği.',
            'İş-yaşam dengesi mücadelesi.',
            'Uzun vadeli taahhütler (ev, evlilik, çocuk).',
            'Sosyal saat baskısı: "Bu yaşta şunları yapmış olmalıyım" düşüncesi.',
            'Ebeveynlik: Yeni bir kimlik boyutu.'
        ],
        keyMilestones: ['Kariyer ilerleme', 'Evlilik/Partnerlik', 'Ebeveyn olma', 'Finansal güvence']
    },
    {
        id: 'middle-adulthood',
        name: 'Orta Yaş',
        ageRange: '40-65 yaş',
        minAge: 40,
        maxAge: 65,
        color: '#2E8B57',
        icon: '🌿',
        description: 'Üretkenlik ve yaşam değerlendirmesi',
        psychologicalDevelopment: [
            'Üretkenlik vs. Durgunluk (Erikson): Gelecek nesillere katkı ihtiyacı.',
            'Orta yaş krizi: Başarıların ve başarısızlıkların değerlendirilmesi.',
            'Boş yuva sendromu: Çocukların evden ayrılması.',
            'Sandviç kuşağı: Hem yaşlanan ebeveynlere hem çocuklara bakım.',
            'Fiziksel değişimlere uyum (menopoz, fiziksel güç kaybı).',
            'Kariyer zirvesi veya kariyer değişikliği.',
            'Anlam arayışı derinleşir.',
            'Bilgelik ve deneyim aktarma isteği.'
        ],
        keyMilestones: ['Kariyer zirvesi', 'Çocukların bağımsızlaşması', 'Emeklilik planlaması', 'Sağlık farkındalığı']
    },
    {
        id: 'late-adulthood',
        name: 'Yaşlılık',
        ageRange: '65+ yaş',
        minAge: 65,
        maxAge: 100,
        color: '#DAA520',
        icon: '🌅',
        description: 'Bilgelik ve yaşam bütünlüğü',
        psychologicalDevelopment: [
            'Benlik Bütünlüğü vs. Umutsuzluk (Erikson): Yaşamı kabul veya pişmanlık.',
            'Yaşam gözden geçirme: Anıların ve deneyimlerin değerlendirilmesi.',
            'Bilgelik: Deneyimden gelen derin anlayış.',
            'Emeklilik adaptasyonu: Yeni roller ve aktiviteler.',
            'Fiziksel ve bilişsel değişimlerle başa çıkma.',
            'Kayıplarla yüzleşme: Eş, arkadaş, sağlık kayıpları.',
            'Miras bırakma isteği: Torunlara, topluma katkı.',
            'Ölüm farkındalığı ve kabullenme süreci.'
        ],
        keyMilestones: ['Emeklilik', 'Torunlar', 'Yaşam hikayesi paylaşımı', 'İç huzur arayışı']
    }
];

// Yaşa göre dönemi bul
export const getStageByAge = (age) => {
    return developmentStages.find(stage => age >= stage.minAge && age < stage.maxAge)
        || developmentStages[developmentStages.length - 1];
};

// Tüm yaş işaretlerini al
export const getAgeMarkers = () => {
    return [0, 2, 6, 11, 13, 18, 25, 40, 65, 80];
};
