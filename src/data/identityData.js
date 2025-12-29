// Kimlik Tipleri ve Beyin Bölgeleri İlişkisi
export const identityTypes = [
    {
        id: 'biological',
        name: 'Biyolojik Kimlik',
        icon: '🧬',
        color: '#FF6B6B',
        description: 'Genetik yapınız, beyin kimyanız ve nörobiyolojik özellikleriniz',
        brainConnections: [
            { region: 'Hipotalamus', role: 'Hormon üretimi ve temel içgüdüler' },
            { region: 'Beyin Sapı', role: 'Temel yaşam fonksiyonları' },
            { region: 'Limbik Sistem', role: 'Duygusal tepkiler ve hafıza' }
        ],
        factors: [
            'DNA ve genetik miras',
            'Nörotransmitter seviyeleri (dopamin, serotonin)',
            'Beyin yapısı ve hacmi',
            'Hormonal denge'
        ],
        uniquenessNote: 'İkizler bile farklı beyin bağlantılarına sahiptir.'
    },
    {
        id: 'psychological',
        name: 'Psikolojik Kimlik',
        icon: '🧠',
        color: '#4ECDC4',
        description: 'Düşünce kalıplarınız, duygusal tepkileriniz ve kişilik özellikleriniz',
        brainConnections: [
            { region: 'Prefrontal Korteks', role: 'Kişilik, karar verme, öz-farkındalık' },
            { region: 'Amigdala', role: 'Duygusal tepkiler ve korkular' },
            { region: 'İnsula', role: 'Empati ve iç farkındalık' }
        ],
        factors: [
            'Kişilik özellikleri (Big Five)',
            'Bilişsel stil ve düşünme biçimi',
            'Duygusal zeka seviyesi',
            'Başa çıkma mekanizmaları'
        ],
        uniquenessNote: 'Aynı olaya herkes farklı tepki verir.'
    },
    {
        id: 'social',
        name: 'Sosyal Kimlik',
        icon: '👥',
        color: '#45B7D1',
        description: 'Deneyimleriniz, ilişkileriniz ve toplumsal rolleriniz',
        brainConnections: [
            { region: 'Temporal Lob', role: 'Sosyal ipuçlarını yorumlama' },
            { region: 'Prefrontal Korteks', role: 'Sosyal davranış kontrolü' },
            { region: 'Ayna Nöronlar', role: 'Empati ve taklit öğrenme' }
        ],
        factors: [
            'Aile ve çocukluk deneyimleri',
            'Kültürel arka plan',
            'Eğitim ve sosyal çevre',
            'Yaşanmış travmalar ve başarılar',
            'İlişkiler ve bağlanma stilleri'
        ],
        uniquenessNote: 'Hiç kimse sizin yaşadıklarınızı, sizin gözünüzden yaşamadı.'
    },
    {
        id: 'narrative',
        name: 'Anlatısal Kimlik',
        icon: '📖',
        color: '#96CEB4',
        description: 'Kendinize anlattığınız hikaye - kim olduğunuz ve nereye gittiğiniz',
        brainConnections: [
            { region: 'Hipokampüs', role: 'Otobiyografik bellek' },
            { region: 'Prefrontal Korteks', role: 'Gelecek planlaması' },
            { region: 'Default Mode Network', role: 'Öz-yansıtma ve hayal kurma' }
        ],
        factors: [
            'Geçmiş anıların yorumu',
            'Şu anki öz-algı',
            'Gelecek hayalleri ve hedefler',
            'Değerler ve inançlar'
        ],
        uniquenessNote: 'Hayat hikayenizi yazan tek kişi sizsiniz.'
    }
];

// Benzersizlik Mesajı
export const uniquenessMessage = {
    title: 'Dünyada 1 ve Teksiniz',
    subtitle: 'Ve bu bir tesadüf değil, bilim.',
    explanation: `
    Nörobiyoloji size bir temel sağlar - beyin kimyası, genetik yapı, nörotransmitter seviyeleri. 
    Ancak asıl sizi "siz" yapan şey, bu temelin üzerine inşa edilen SOSYAL KİMLİĞİNİZDİR.
    
    Her deneyim beyninizde yeni bağlantılar oluşturur. Çocukluğunuzda duyduğunuz bir söz, 
    ilk kez aşık olduğunuz an, bir başarısızlıktan sonra ayağa kalkışınız - bunların hepsi 
    nöral ağlarınızı şekillendirir.
  `,
    keyPoints: [
        {
            icon: '🧬',
            title: 'Nörobiyoloji Temel Sağlar',
            description: '8.1 milyar insanın hiçbirinde birebir aynı beyin yapısı yok. Parmak izi gibi, beyin de benzersiz.'
        },
        {
            icon: '🌱',
            title: 'Deneyimler Şekillendirir',
            description: 'Aynı DNA\'ya sahip ikizler bile farklı deneyimler yaşar ve farklı kişilikler geliştirir.'
        },
        {
            icon: '👥',
            title: 'Sosyal Kimlik Tanımlar',
            description: 'Kim olduğunuz, ne yaşadığınıza ve bu deneyimleri nasıl yorumladığınıza bağlıdır.'
        },
        {
            icon: '✨',
            title: 'Sonuç: Biriciklik',
            description: 'Sizin bakış açınız, sizin hikayeniz, sizin varlığınız - evrende sadece bir kez var olacak.'
        }
    ],
    quote: '"Beynin kimyası sizi oluşturur, ama yaşam sizi tanımlar."',
    finalMessage: 'Geçmişten bugüne, bugünden geleceğe - her an benzersiz bir yolculukta olan tek kişi: SİZ.'
};
