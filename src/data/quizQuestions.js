// Quiz soruları - beyin bölgeleri ve gelişim dönemleri hakkında
export const quizQuestions = [
    // Beyin Bölgeleri Soruları
    {
        id: 1,
        category: 'brain',
        question: 'Karar verme ve planlama işlevlerinden sorumlu beyin bölgesi hangisidir?',
        options: [
            { id: 'a', text: 'Amigdala' },
            { id: 'b', text: 'Prefrontal Korteks' },
            { id: 'c', text: 'Hipokampüs' },
            { id: 'd', text: 'Temporal Lob' }
        ],
        correctAnswer: 'b',
        explanation: 'Prefrontal Korteks, karar verme, planlama, sosyal davranış kontrolü ve kişilik ifadesinden sorumludur.'
    },
    {
        id: 2,
        category: 'brain',
        question: 'Korku ve kaygı tepkilerini işleyen beyin bölgesi hangisidir?',
        options: [
            { id: 'a', text: 'Parietal Lob' },
            { id: 'b', text: 'İnsula' },
            { id: 'c', text: 'Amigdala' },
            { id: 'd', text: 'Prefrontal Korteks' }
        ],
        correctAnswer: 'c',
        explanation: 'Amigdala, duygusal tepkilerden, özellikle korku ve kaygı işlemeden sorumludur.'
    },
    {
        id: 3,
        category: 'brain',
        question: 'Anıların oluşturulduğu ve saklandığı bölge hangisidir?',
        options: [
            { id: 'a', text: 'Hipokampüs' },
            { id: 'b', text: 'Amigdala' },
            { id: 'c', text: 'İnsula' },
            { id: 'd', text: 'Temporal Lob' }
        ],
        correctAnswer: 'a',
        explanation: 'Hipokampüs, bellek oluşumu, öğrenme ve mekansal navigasyonun merkezidir.'
    },
    {
        id: 4,
        category: 'brain',
        question: 'Beden koordinasyonu ve mekansal farkındalıktan sorumlu bölge hangisidir?',
        options: [
            { id: 'a', text: 'Temporal Lob' },
            { id: 'b', text: 'Parietal Lob' },
            { id: 'c', text: 'Prefrontal Korteks' },
            { id: 'd', text: 'Amigdala' }
        ],
        correctAnswer: 'b',
        explanation: 'Parietal Lob, mekansal farkındalık, dokunma algısı ve beden koordinasyonundan sorumludur.'
    },
    {
        id: 5,
        category: 'brain',
        question: 'Dil anlama ve yüz tanımadan sorumlu bölge hangisidir?',
        options: [
            { id: 'a', text: 'Hipokampüs' },
            { id: 'b', text: 'İnsula' },
            { id: 'c', text: 'Temporal Lob' },
            { id: 'd', text: 'Parietal Lob' }
        ],
        correctAnswer: 'c',
        explanation: 'Temporal Lob, işitsel işleme, dil anlama ve yüz tanımadan sorumludur.'
    },

    // Gelişim Dönemleri Soruları
    {
        id: 6,
        category: 'development',
        question: 'Erikson\'a göre bebeklik döneminde (0-2 yaş) temel kriz nedir?',
        options: [
            { id: 'a', text: 'Özerklik vs. Utanç' },
            { id: 'b', text: 'Temel Güven vs. Güvensizlik' },
            { id: 'c', text: 'İnisiyatif vs. Suçluluk' },
            { id: 'd', text: 'Kimlik vs. Rol Karmaşası' }
        ],
        correctAnswer: 'b',
        explanation: 'Bebeklik döneminde bebekler, bakım verenlerine bağlı olarak dünyaya güven veya güvensizlik geliştirir.'
    },
    {
        id: 7,
        category: 'development',
        question: 'Prefrontal korteks kaç yaşına kadar tam olarak olgunlaşır?',
        options: [
            { id: 'a', text: '18 yaş' },
            { id: 'b', text: '21 yaş' },
            { id: 'c', text: '25 yaş' },
            { id: 'd', text: '30 yaş' }
        ],
        correctAnswer: 'c',
        explanation: 'Prefrontal korteks yaklaşık 25 yaşına kadar gelişmeye devam eder. Bu yüzden ergenlerde dürtü kontrolü tam gelişmemiştir.'
    },
    {
        id: 8,
        category: 'development',
        question: '"Ben kimim?" sorusunun yoğun olarak sorgulandığı dönem hangisidir?',
        options: [
            { id: 'a', text: 'Orta Çocukluk (6-11)' },
            { id: 'b', text: 'Ergenlik (13-18)' },
            { id: 'c', text: 'Genç Yetişkinlik (25-40)' },
            { id: 'd', text: 'Orta Yaş (40-65)' }
        ],
        correctAnswer: 'b',
        explanation: 'Ergenlik döneminde "Kimlik vs. Rol Karmaşası" krizi yaşanır ve gençler "Ben kimim?" sorusunu yoğun olarak sorgular.'
    },
    {
        id: 9,
        category: 'development',
        question: 'Piaget\'ye göre somut işlemler dönemi hangi yaş aralığındadır?',
        options: [
            { id: 'a', text: '0-2 yaş' },
            { id: 'b', text: '2-7 yaş' },
            { id: 'c', text: '7-11 yaş' },
            { id: 'd', text: '12+ yaş' }
        ],
        correctAnswer: 'c',
        explanation: 'Somut işlemler dönemi 7-11 yaş arasını kapsar. Bu dönemde mantıksal düşünme başlar ama soyut kavramlarla sınırlıdır.'
    },
    {
        id: 10,
        category: 'development',
        question: 'Erikson\'a göre orta yaşta (40-65) temel kriz nedir?',
        options: [
            { id: 'a', text: 'Yakınlık vs. Yalıtılmışlık' },
            { id: 'b', text: 'Üretkenlik vs. Durgunluk' },
            { id: 'c', text: 'Benlik Bütünlüğü vs. Umutsuzluk' },
            { id: 'd', text: 'Kimlik vs. Rol Karmaşası' }
        ],
        correctAnswer: 'b',
        explanation: 'Orta yaşta insanlar gelecek nesillere katkı sağlama (üretkenlik) veya durgunluk arasında bir denge kurmaya çalışır.'
    },
    {
        id: 11,
        category: 'brain',
        question: 'İç organ duyuları ve empati için kritik olan bölge hangisidir?',
        options: [
            { id: 'a', text: 'Amigdala' },
            { id: 'b', text: 'Hipokampüs' },
            { id: 'c', text: 'İnsula' },
            { id: 'd', text: 'Prefrontal Korteks' }
        ],
        correctAnswer: 'c',
        explanation: 'İnsula, kalp atışı, nefes, açlık gibi iç duyumları algılar ve empati ile duygusal farkındalık için kritiktir.'
    },
    {
        id: 12,
        category: 'development',
        question: 'Hangi dönemde "Sandviç Kuşağı" kavramı ortaya çıkar?',
        options: [
            { id: 'a', text: 'Genç Yetişkinlik' },
            { id: 'b', text: 'Orta Yaş' },
            { id: 'c', text: 'Yaşlılık' },
            { id: 'd', text: 'Ergenlik' }
        ],
        correctAnswer: 'b',
        explanation: 'Orta yaşta insanlar hem yaşlanan ebeveynlerine hem de kendi çocuklarına bakım sağlamak durumunda kalabilir - bu "Sandviç Kuşağı" olarak adlandırılır.'
    }
];

// Rastgele soru seç
export const getRandomQuestions = (count = 5) => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

// Kategoriye göre soru getir
export const getQuestionsByCategory = (category) => {
    return quizQuestions.filter(q => q.category === category);
};
