// Hangi yaşta hangi beyin bölgesinin aktif olarak geliştiği
export const brainAgeData = [
    {
        ageRange: '0-2',
        stageName: 'Bebeklik',
        activeRegions: ['hippocampus', 'amygdala', 'temporal'],
        description: 'Limbik sistem ve duygusal bağlanma merkezleri hızla gelişir.',
        details: {
            hippocampus: 'Temel hafıza ve öğrenme devreleri oluşuyor. Anne sesini ve yüzünü tanıma kapasitesi gelişiyor.',
            amygdala: 'Duygusal tepkiler ve bağlanma davranışları şekilleniyor. Güvenli bağlanma için kritik dönem.',
            temporal: 'Dil anlama becerileri temelleniyor. İlk sözcükleri anlamaya başlıyor.'
        },
        color: '#87CEEB'
    },
    {
        ageRange: '2-6',
        stageName: 'İlk Çocukluk',
        activeRegions: ['prefrontal', 'temporal', 'parietal'],
        description: 'Dil patlaması ve motor becerilerin hızlı gelişimi.',
        details: {
            prefrontal: 'Temel karar verme ve dürtü kontrolü başlıyor. "Hayır" demeyi öğreniyor.',
            temporal: 'Dil becerileri patlama yaşıyor. Kelime hazinesi hızla genişliyor.',
            parietal: 'Motor koordinasyon ve mekansal farkındalık gelişiyor. Koşma, atlama, çizim.'
        },
        color: '#90EE90'
    },
    {
        ageRange: '6-11',
        stageName: 'Orta Çocukluk',
        activeRegions: ['prefrontal', 'parietal', 'hippocampus'],
        description: 'Akademik öğrenme ve mantıksal düşünme becerileri.',
        details: {
            prefrontal: 'Planlama ve organize etme becerileri gelişiyor. Ödev yapabilme, sıra bekleme.',
            parietal: 'Matematik ve mekansal problem çözme becerileri gelişiyor.',
            hippocampus: 'Uzun süreli bellek güçleniyor. Okul bilgileri kalıcı hale geliyor.'
        },
        color: '#FFA500'
    },
    {
        ageRange: '11-13',
        stageName: 'Ergenliğe Geçiş',
        activeRegions: ['amygdala', 'prefrontal', 'insula'],
        description: 'Hormonal değişimlerle duygusal yoğunluk.',
        details: {
            amygdala: 'Duygusal tepkiler yoğunlaşıyor. Hormonların etkisiyle daha hassas hale geliyor.',
            prefrontal: 'Hâlâ gelişmekte. Dürtüsel davranışlar görülebilir.',
            insula: 'Beden farkındalığı artıyor. Fiziksel değişimlere hassasiyet.'
        },
        color: '#9370DB'
    },
    {
        ageRange: '13-18',
        stageName: 'Ergenlik',
        activeRegions: ['prefrontal', 'amygdala', 'insula'],
        description: 'Kimlik oluşumu ve risk alma döngüsü.',
        details: {
            prefrontal: 'Aktif olarak yeniden yapılanıyor. Soyut düşünme gelişiyor ama tam olgunlaşmadı.',
            amygdala: 'Duygusal tepkiler güçlü. Risk alma davranışlarını tetikleyebilir.',
            insula: 'Öz-farkındalık ve empati gelişiyor. "Ben kimim?" sorusu yoğunlaşıyor.'
        },
        color: '#FF6347'
    },
    {
        ageRange: '18-25',
        stageName: 'Beliren Yetişkinlik',
        activeRegions: ['prefrontal', 'hippocampus', 'temporal'],
        description: 'Prefrontal korteks olgunlaşmasını tamamlıyor.',
        details: {
            prefrontal: 'Son olgunlaşma dönemi (25 yaşına kadar). Karar verme, planlama, dürtü kontrolü optimize ediliyor.',
            hippocampus: 'Karmaşık öğrenme ve uzmanlaşma. Üniversite düzeyinde bilgi edinme.',
            temporal: 'Sosyal anlama ve iletişim becerileri rafine hale geliyor.'
        },
        color: '#FF69B4'
    },
    {
        ageRange: '25-40',
        stageName: 'Genç Yetişkinlik',
        activeRegions: ['prefrontal', 'temporal', 'insula'],
        description: 'Tüm bölgeler optimal çalışma seviyesinde.',
        details: {
            prefrontal: 'Tam kapasite çalışıyor. Karmaşık karar verme ve strateji geliştirme.',
            temporal: 'Sosyal zeka doruğunda. İlişki yönetimi ve iletişim becerileri.',
            insula: 'Duygusal zeka ve empati olgunlaşmış durumda.'
        },
        color: '#4169E1'
    },
    {
        ageRange: '40-65',
        stageName: 'Orta Yaş',
        activeRegions: ['prefrontal', 'hippocampus', 'temporal'],
        description: 'Deneyimle güçlenmiş bağlantılar, bazı alanlarda hafif yavaşlama.',
        details: {
            prefrontal: 'Bilgelik ve deneyime dayalı karar verme. Hız yerine doğruluk ön planda.',
            hippocampus: 'Yeni bilgi öğrenme hafif yavaşlar ama mevcut bilgi ağı güçlü.',
            temporal: 'Dil becerileri ve kelime hazinesi en yüksek seviyede.'
        },
        color: '#2E8B57'
    },
    {
        ageRange: '65+',
        stageName: 'Yaşlılık',
        activeRegions: ['prefrontal', 'hippocampus', 'temporal'],
        description: 'Bilgelik dönemi, hafıza ve hız değişimleri.',
        details: {
            prefrontal: 'Duygusal düzenleme ve bilgelik korunuyor. Deneyime dayalı içgörü.',
            hippocampus: 'Yeni anılar oluşturmada zorluk olabilir ama eski anılar canlı.',
            temporal: 'Dil ve anlama becerileri büyük ölçüde korunuyor.'
        },
        color: '#DAA520'
    }
];

// Yaşa göre aktif dönem verisi getir
export const getBrainDataByAge = (age) => {
    if (age < 2) return brainAgeData[0];
    if (age < 6) return brainAgeData[1];
    if (age < 11) return brainAgeData[2];
    if (age < 13) return brainAgeData[3];
    if (age < 18) return brainAgeData[4];
    if (age < 25) return brainAgeData[5];
    if (age < 40) return brainAgeData[6];
    if (age < 65) return brainAgeData[7];
    return brainAgeData[8];
};

// Bölge Türkçe adları
export const regionNames = {
    prefrontal: 'Prefrontal Korteks',
    amygdala: 'Amigdala',
    hippocampus: 'Hipokampüs',
    temporal: 'Temporal Lob',
    parietal: 'Parietal Lob',
    insula: 'İnsula'
};
