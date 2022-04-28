const Profile = () => {
    return (
        <section id="profile" className="py-24">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center">Profile</h1>
                <div className="flex lg:items-center flex-wrap p-10 md:w-12/12 lg:w-10/12 mx-auto">
                    <div className="md:w-3/12 md:p-0 w-full p-10">
                        <img src="./Profile.png" className="w-full" />
                    </div>
                    <div className="md:w-9/12 w-full px-10">
                        <p className="xl:text-lg leading-relaxed">
                            Lorem Ipsum adalah contoh teks atau dummy dalam
                            industri percetakan dan penataan huruf atau
                            typesetting. Lorem Ipsum telah menjadi standar
                            contoh teks sejak tahun 1500an, saat seorang tukang
                            cetak yang tidak dikenal mengambil sebuah kumpulan
                            teks dan mengacaknya untuk menjadi sebuah buku
                        </p>
                        <p className="xl:text-lg leading-relaxed mt-6">
                            Lorem Ipsum adalah contoh teks atau dummy dalam
                            industri percetakan dan penataan huruf atau
                            typesetting. Lorem Ipsum telah menjadi standar
                            contoh teks sejak tahun 1500an, saat seorang tukang
                            cetak yang tidak dikenal mengambil sebuah kumpulan
                            teks dan mengacaknya untuk menjadi sebuah buku
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
