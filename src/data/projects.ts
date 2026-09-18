import type { Lang } from "@/lib/language";;
import FotoDepan from "@/assets/foto depan.png";
import FotoDashA from "@/assets/dash admin.png";
import FotoDashP from "@/assets/dash Pelan.png";
import FotoDepan6 from "@/assets/foto depan6.png";
import FotoProduk from "@/assets/katalog produk.png";
import FotoPemesanan from "@/assets/list pesan pelan.png";
import FotoPenyewaan from "@/assets/list penyewaan.png";
import FotoPembayaran from "@/assets/lst pembayaran.png";
import FotoPerawatan from "@/assets/perawatan produk.png";
import FotoHilang from "@/assets/produk hilang.png";
import FotoPengguna from "@/assets/manajemen pengguna.png";
import FotoOffline from "@/assets/offline.png";
import FotoPDetailOffline from "@/assets/detil offline.png";
import FotoKeamanan from "@/assets/log kemanan.png";
import FotoNotifikasi from "@/assets/notifikasi.png";
import FotoPengaturan from "@/assets/pengaturan.png";
import FotoBoxplot from "@/assets/g_Pertama.png";
import FotoBoxplot2 from "@/assets/g_kedua.png";
import FotoScatterPlot from "@/assets/g_ketiga.png";
import FotoHeatmap from "@/assets/g_empat.png";
import FotoScatterPlot2 from "@/assets/g_lima.png";
import FotoRegresiLinear from "@/assets/g_enam.png";
import FotoBoxplot3 from "@/assets/g_tujuh.png";
import FotoResidualPlot from "@/assets/g_delapan.png";
import FotoScatterPlot3 from "@/assets/g_9.png";
import FotoRegresiLinear2 from "@/assets/g_10.png";
import FotoBoxplot4 from "@/assets/g_11.png";
import FotoBoxplot5 from "@/assets/g_12.png";
import FotoBarchat from "@/assets/g_13.png";
import FotoScatterPlot4 from "@/assets/g_14.png";
import FotoLogin from "@/assets/login.png";
import FotoDash from "@/assets/dash.png";
import FotoPengguna2 from "@/assets/Penguna.png";
import FotoKategori from "@/assets/kategori.png";
import FotoPemasok from "@/assets/pemasok.png";
import FotoBarang from "@/assets/barang.png";
import FotoBarangMasuk from "@/assets/barang_masuk.png";
import FotoBarangKeluar from "@/assets/barang_keluar.png";
import FotoProfil from "@/assets/profil.png";
import FotoPengaturan2 from "@/assets/pengat.png";


export type ProjectCategory =
  | "information-system"
  | "web-development"
  | "data-mining"
  | "machine-learning"
  | "database";

export type ProjectLink = {
  label: string;
  url: string | null;
};

export type ProjectContent = {
  title: string;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  summary: string;
  overview: string;
  background: string;
  problem: string;
  objective: string;
  role: string;
  process: string[];
  features: string[];
  gallery: {
    image: string;
    caption: string;
  }[];
  galleryHeading: string;
  testing: string;
  result: string;
  challenges: { challenge: string; solution: string }[];
  extra?: { heading: string; body: string; items?: string[] }[];
};

export type Project = {
  id: string;
  number: string;
  slug: string;
  thumbnail: string;
  thumbnailAlt: Record<Lang, string>;
  categories: ProjectCategory[];
  technologies: string[];
  featured: boolean;
  links: ProjectLink[];
  content: Record<Lang, ProjectContent>;
};

export const projects: Project[] = [
  {
    id: "scaffolding",
    number: "01",
    slug: "scaffolding-management-system",
    thumbnail: FotoDepan,
    thumbnailAlt: {
      id: "Ilustrasi abstrak sistem pemesanan dan pengelolaan layanan scaffolding",
      en: "Abstract illustration of a scaffolding ordering and service management system",
    },
    categories: ["information-system", "web-development", "database"],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    featured: true,
    links: [
      { label: "GitHub", url: null },
      { label: "Live Demo", url: null },
    ],
    content: {
      id: {
        title: "Sistem Pemesanan & Pengelolaan Layanan Scaffolding",
        categoryLabel: "Information System • Web Application",
        shortDescription:
          "Sistem informasi berbasis web untuk pemesanan dan pengelolaan layanan scaffolding secara terintegrasi.",
        description:
          "Sistem informasi berbasis web yang dikembangkan untuk membantu proses pemesanan dan pengelolaan layanan scaffolding secara terintegrasi. Sistem mencakup pengelolaan produk, pelanggan, pemesanan, transaksi, pembayaran, stok, barang rusak, notifikasi, dan dashboard administrasi.",
        summary:
          "Aplikasi web yang mengintegrasikan proses pemesanan, transaksi, pembayaran, dan pengelolaan stok layanan scaffolding dalam satu sistem.",
        overview:
          "Project ini merupakan pengembangan sistem informasi berbasis web untuk mendukung proses pemesanan dan pengelolaan layanan scaffolding. Sistem dirancang agar data produk, pelanggan, pemesanan, transaksi, pembayaran, dan stok tersimpan serta terhubung dalam satu basis data, sehingga proses administrasi dapat dijalankan secara lebih terstruktur.",
        background:
          "Layanan scaffolding melibatkan banyak data yang saling berkaitan, seperti data produk, pelanggan, pemesanan, pembayaran, stok, dan kondisi barang. Pengelolaan data seperti ini membutuhkan sistem yang terintegrasi agar setiap proses dapat dicatat dan ditelusuri dengan jelas.",
        problem:
          "Pengelolaan data yang masih manual atau belum terintegrasi menyulitkan proses pencatatan pemesanan, pemantauan stok, serta penelusuran transaksi dan pembayaran. Kondisi ini menjadi dasar kebutuhan sistem informasi yang lebih terstruktur.",
        objective:
          "Membangun sistem informasi berbasis web yang mampu mengelola produk, pelanggan, pemesanan, transaksi, pembayaran, stok, dan pencatatan barang rusak secara terintegrasi, serta menyediakan dashboard administrasi untuk memantau data operasional.",
        role: "System Analysis & Web Application Development",
        process: [
          "Requirements Analysis",
          "System Design",
          "Database Design",
          "Application Development",
          "Feature Implementation",
          "Testing & Evaluation",
        ],
        features: [
          "Manajemen produk scaffolding",
          "Katalog produk",
          "Manajemen pelanggan",
          "Pemesanan scaffolding",
          "Pengelolaan transaksi",
          "Pembayaran DP dan pelunasan",
          "Manajemen stok",
          "Pencatatan barang rusak",
          "Dashboard admin",
          "Notifikasi",
          "Laporan transaksi",
          "Manajemen pengguna",
        ],
        galleryHeading: "Screenshots",

gallery: [
  {
    image: FotoDashA,
    caption: "Halaman dashboard admin yang menampilkan ringkasan informasi dan aktivitas utama dalam sistem pengelolaan layanan scaffolding. Admin dapat memantau data pesanan, penyewaan, pembayaran, stok produk, serta aktivitas lainnya.",
  },
  {
  image: FotoDashP,
  caption:
    "Halaman dashboard pelanggan yang menampilkan ringkasan informasi terkait aktivitas pelanggan dalam sistem layanan scaffolding. Pelanggan dapat memantau pesanan, penyewaan, pembayaran, perjanjian, dan status transaksi.",
},
  {
    image: FotoProduk,
    caption: "Halaman manajemen produk untuk menambah, mengubah, menghapus, dan mengelola stok scaffolding.",
  },
  {
    image: FotoPemesanan,
    caption: "Halaman pemesanan yang menampilkan detail produk scaffolding yang dipesan oleh pelanggan.",
  },
  {
    image: FotoPenyewaan,
    caption: "Halaman transaksi untuk melihat dan mengelola data transaksi penyewaan scaffolding.",
  },
  {
    image: FotoPembayaran,
    caption: "Halaman pembayaran yang digunakan untuk mencatat pembayaran DP dan pelunasan.",
  },
  {
  image: FotoPerawatan,
  caption:
    "Halaman perawatan produk yang digunakan untuk mengelola data dan proses perawatan scaffolding yang mengalami kerusakan.",
},

{
  image: FotoHilang,
  caption:
    "Halaman produk hilang yang digunakan untuk mencatat dan mengelola data scaffolding yang hilang selama proses penyewaan.",
},

{
  image: FotoPengguna,
  caption:
    "Halaman manajemen pengguna yang digunakan untuk mengelola informasi pengguna yang terdaftar dalam sistem layanan scaffolding.",
},

{
  image: FotoOffline,
  caption:
    "Halaman pemesanan offline yang digunakan untuk mengelola transaksi penyewaan scaffolding yang dilakukan secara langsung oleh pelanggan.",
},

{
  image: FotoPDetailOffline,
  caption:
    "Halaman detail pemesanan offline yang menampilkan informasi lengkap mengenai pelanggan, produk, pembayaran, dan penyewaan scaffolding.",
},

{
  image: FotoKeamanan,
  caption:
    "Halaman log keamanan yang digunakan untuk mencatat dan memantau aktivitas pengguna dalam sistem sebagai bagian dari keamanan sistem.",
},

{
  image: FotoNotifikasi,
  caption:
    "Halaman notifikasi yang digunakan untuk menampilkan pemberitahuan terkait aktivitas dan proses dalam sistem layanan scaffolding.",
},

{
  image: FotoPengaturan,
  caption:
    "Halaman pengaturan yang digunakan untuk mengelola informasi profil, kata sandi, dan pengaturan akun pengguna dalam sistem.",
},
],
        testing:
  "Pengujian sistem dilakukan menggunakan Black Box Testing dan Usability Testing. Hasil Usability Testing memperoleh persentase 87,33% dan termasuk kategori Sangat Setuju, yang menunjukkan bahwa sistem dapat digunakan dengan baik oleh pengguna.",
        result:
  "Sistem berhasil mengintegrasikan proses pengelolaan produk, pelanggan, pemesanan, transaksi, pembayaran, stok, barang rusak, dan notifikasi dalam satu platform berbasis web. Hasil pengujian menunjukkan bahwa sistem dapat mendukung proses administrasi dan pengelolaan layanan scaffolding secara lebih terstruktur.",
        challenges: [
  {
    challenge: "Mengelola stok scaffolding yang dapat berubah berdasarkan proses pemesanan dan perawatan.",
    solution:
      "Menerapkan mekanisme pembaruan stok berdasarkan produk yang terlibat dalam pemesanan dan proses perawatan sehingga jumlah stok dapat diperbarui secara otomatis.",
  },
  {
    challenge: "Mengelola beberapa produk dalam satu pemesanan.",
    solution:
      "Menggunakan struktur relasi antara tabel pemesanan dan detail pemesanan sehingga satu transaksi dapat memiliki beberapa produk dengan jumlah masing-masing.",
  },
],
      },
      en: {
        title: "Scaffolding Ordering & Service Management System",
        categoryLabel: "Information System • Web Application",
        shortDescription:
          "A web-based information system for integrated scaffolding ordering and service management.",
        description:
          "A web-based information system developed to support integrated scaffolding ordering and service management. The system includes product management, customer management, orders, transactions, payments, inventory, damaged items, notifications, and an administrative dashboard.",
        summary:
          "A web application integrating ordering, transactions, payments, and inventory management for scaffolding services in a single system.",
        overview:
          "This project is a web-based information system supporting scaffolding ordering and service management. It was designed so that product, customer, order, transaction, payment, and inventory data are stored and connected within one database, allowing administrative processes to run in a more structured way.",
        background:
          "Scaffolding services involve many interrelated data entities such as products, customers, orders, payments, inventory, and item condition. Managing this data requires an integrated system so every process can be recorded and traced clearly.",
        problem:
          "Manual or less integrated data management makes it difficult to record orders, monitor inventory, and trace transactions and payments. This context forms the basis for a more structured information system.",
        objective:
          "Build a web-based information system able to manage products, customers, orders, transactions, payments, inventory, and damaged item records in an integrated way, with an administrative dashboard to monitor operational data.",
        role: "System Analysis & Web Application Development",
        process: [
          "Requirements Analysis",
          "System Design",
          "Database Design",
          "Application Development",
          "Feature Implementation",
          "Testing & Evaluation",
        ],
        features: [
          "Scaffolding product management",
          "Product catalog",
          "Customer management",
          "Scaffolding ordering",
          "Transaction management",
          "Down payment and full payment management",
          "Inventory management",
          "Damaged item records",
          "Admin dashboard",
          "Notifications",
          "Transaction reports",
          "User management",
        ],
        galleryHeading: "Screenshots",
        gallery: [ 
          {
  image: FotoDashA,
  caption:
    "The admin dashboard page displays a summary of key information and activities in the scaffolding service management system. Admins can monitor orders, rentals, payments, product stock, and other activities.",
},

{
  image: FotoDashP,
  caption:
    "The customer dashboard page displays a summary of customer activities in the scaffolding service system. Customers can monitor orders, rentals, payments, agreements, and transaction status.",
},

{
  image: FotoProduk,
  caption:
    "The product management page is used to add, edit, delete, and manage scaffolding stock.",
},

{
  image: FotoPemesanan,
  caption:
    "The ordering page displays details of the scaffolding products ordered by customers.",
},

{
  image: FotoPenyewaan,
  caption:
    "The rental transaction page is used to view and manage scaffolding rental transaction data.",
},

{
  image: FotoPembayaran,
  caption:
    "The payment page is used to record down payment (DP) and final payment transactions.",
},
          {
  image: FotoPerawatan,
  caption:
    "The product maintenance page is used to record and manage the maintenance process for scaffolding equipment that has been damaged.",
},

{
  image: FotoHilang,
  caption:
    "The lost products page is used to record and manage scaffolding equipment that is lost during the rental process.",
},

{
  image: FotoPengguna,
  caption:
    "The user management page is used to manage information about users registered in the scaffolding service system.",
},

{
  image: FotoOffline,
  caption:
    "The offline order page is used to manage scaffolding rental transactions made directly by customers.",
},

{
  image: FotoPDetailOffline,
  caption:
    "The offline order detail page displays detailed information about the customer, products, payment, and scaffolding rental.",
},

{
  image: FotoKeamanan,
  caption:
    "The security log page is used to record and monitor user activities in the system as part of system security management.",
},

{
  image: FotoNotifikasi,
  caption:
    "The notification page is used to display information and notifications related to activities within the scaffolding service system.",
},

{
  image: FotoPengaturan,
  caption:
    "The settings page is used to manage account information, profile, password, and system settings.",
},
         ],
        testing: "The system was tested using Black Box Testing and Usability Testing. The Usability Testing achieved a score of 87.33%, categorized as Strongly Agree, indicating that the system provides a good level of usability for its users.", 
        result: "The system successfully integrates product, customer, order, transaction, payment, inventory, damaged item, and notification management into a single web-based platform. The testing results indicate that the system can support scaffolding service administration and management in a more structured and efficient way.", 
        challenges: [ { challenge: "Managing scaffolding inventory that changes based on ordering and maintenance processes.", 
          solution: "Implemented an inventory update mechanism based on the products involved in ordering and maintenance processes, allowing stock quantities to be updated automatically.", }, 
          { challenge: "Managing multiple products within a single order.", 
            solution: "Implemented a relationship between orders and order details, allowing a single transaction to contain multiple products with their respective quantities.", }, ],
      },
    },
  },
  {
    id: "data-mining",
    number: "02",
    slug: "data-mining-classification",
    thumbnail: FotoDepan6,
    thumbnailAlt: {
      id: "Ilustrasi abstrak proses klasifikasi data mining",
      en: "Abstract illustration of a data mining classification process",
    },
    categories: ["data-mining", "machine-learning"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Google Colab",
      "Jupyter Notebook",
    ],
    featured: true,
    links: [
      { label: "GitHub", url: null },
      { label: "Google Colab", url: null },
      { label: "Documentation", url: null },
    ],
    content: {
      id: {
        title: "Project Klasifikasi Menggunakan Data Mining",
        categoryLabel: "Data Mining • Machine Learning",
        shortDescription:
          "Project pengolahan dan klasifikasi data menggunakan pendekatan data mining, dari preprocessing hingga evaluasi model.",
        description:
          "Project pengolahan dan klasifikasi data menggunakan pendekatan data mining. Proses mencakup persiapan dataset, data preprocessing, exploratory data analysis, persiapan fitur, pembangunan model klasifikasi, pengujian, evaluasi performa, dan visualisasi hasil.",
        summary:
          "Alur kerja data mining lengkap: persiapan dataset, preprocessing, analisis eksploratif, pemodelan klasifikasi, evaluasi, dan visualisasi hasil.",
        overview:
          "Project ini berfokus pada pengolahan data dan pembangunan model klasifikasi menggunakan pendekatan data mining. Seluruh tahapan dikerjakan secara berurutan, mulai dari persiapan dataset hingga evaluasi performa model dan visualisasi hasil.",
        background:
          "Data mentah umumnya belum siap digunakan untuk pemodelan sehingga membutuhkan tahapan pembersihan, transformasi, dan analisis sebelum digunakan pada model klasifikasi.",
        problem:
          "Permasalahan yang dikerjakan berupa klasifikasi data ke dalam kategori target berdasarkan fitur yang tersedia pada dataset. Detail spesifik: [Problem Description]",
        objective:
          "Membangun dan mengevaluasi model klasifikasi berbasis data mining yang mampu memetakan fitur dataset ke kategori target, serta menyajikan hasil analisis melalui visualisasi data.",
        role: "Data Preparation, Data Mining & Model Evaluation",
        process: [
          "Dataset Collection",
          "Data Cleaning",
          "Data Preprocessing",
          "Exploratory Data Analysis",
          "Feature Preparation",
          "Model Training",
          "Model Testing",
          "Model Evaluation",
          "Data Visualization",
        ],
        features: [
          "Data Cleaning",
          "Missing Value Handling",
          "Data Transformation",
          "Feature Preparation",
          "Exploratory Data Analysis",
          "Model Training & Testing",
          "Model Evaluation",
          "Data Visualization",
        ],
        galleryHeading: "Visualisasi",

gallery: [
  {
    image: FotoBoxplot,
    caption:
      "Grafik boxplot yang menunjukkan distribusi harga sewa berdasarkan kota, yaitu Kolkata, Mumbai, Bangalore, Delhi, Chennai, dan Hyderabad.",
  },
  {
    image: FotoBoxplot2,
    caption:
      "Grafik boxplot yang menunjukkan distribusi ukuran rumah setelah data outlier dihapus. Grafik digunakan untuk melihat nilai minimum, kuartil, median, dan maksimum ukuran rumah.",
  },
  {
    image: FotoScatterPlot,
    caption:
      "Grafik scatter plot yang menunjukkan hubungan antara ukuran rumah dan harga sewa berdasarkan status furnishing, yaitu unfurnished, semi-furnished, dan furnished.",
  },
  {
    image: FotoHeatmap,
    caption:
      "Grafik heatmap yang menunjukkan tingkat korelasi antar fitur numerik, yaitu BHK, rent, size, dan bathroom. Nilai korelasi digunakan untuk melihat kekuatan hubungan antarvariabel.",
  },
  {
    image: FotoScatterPlot2,
    caption:
      "Grafik scatter plot yang menunjukkan hubungan antara ukuran rumah dan harga sewa. Grafik digunakan untuk melihat kecenderungan perubahan harga sewa berdasarkan ukuran rumah.",
  },
  {
    image: FotoRegresiLinear,
    caption:
      "Grafik regresi linear yang menunjukkan hubungan dan kecenderungan antara ukuran rumah dengan harga sewa.",
  },
  {
    image: FotoBoxplot3,
    caption:
      "Grafik boxplot yang menunjukkan distribusi harga sewa berdasarkan kategori ukuran rumah, yaitu kecil, sedang, besar, dan sangat besar.",
  },
  {
    image: FotoResidualPlot,
    caption:
      "Grafik residual yang menunjukkan hubungan antara nilai rent yang diprediksi dengan nilai error atau residual. Grafik digunakan untuk melihat pola kesalahan pada hasil prediksi.",
  },
  {
    image: FotoScatterPlot3,
    caption:
      "Grafik scatter plot yang menunjukkan hubungan antara ukuran rumah dan jumlah kamar mandi. Grafik digunakan untuk melihat pola hubungan antara luas rumah dengan jumlah kamar mandi yang tersedia.",
  },
  {
    image: FotoRegresiLinear2,
    caption:
      "Grafik regresi linear yang menunjukkan hubungan dan kecenderungan antara ukuran rumah dengan jumlah kamar mandi. Garis regresi menggambarkan kecenderungan peningkatan jumlah kamar mandi seiring bertambahnya ukuran rumah.",
  },
  {
    image: FotoBoxplot4,
    caption:
      "Grafik boxplot yang menunjukkan distribusi jumlah kamar mandi berdasarkan kategori ukuran rumah, yaitu kecil, sedang, besar, dan sangat besar. Grafik digunakan untuk membandingkan sebaran dan nilai jumlah kamar mandi pada setiap kategori ukuran rumah.",
  },
  {
    image: FotoBoxplot5,
    caption:
      "Grafik boxplot yang menunjukkan distribusi ukuran rumah berdasarkan status furnishing, yaitu unfurnished, semi-furnished, dan furnished. Grafik digunakan untuk membandingkan sebaran ukuran rumah pada setiap status furnishing.",
  },
  {
    image: FotoBarchat,
    caption:
      "Grafik batang yang menunjukkan jumlah data rumah berdasarkan status furnishing, yaitu unfurnished, semi-furnished, dan furnished. Grafik digunakan untuk melihat jumlah data pada masing-masing kategori status furnishing.",
  },
  {
    image: FotoScatterPlot4,
    caption:
      "Grafik scatter plot yang menunjukkan sebaran ukuran rumah berdasarkan status furnishing, yaitu unfurnished, semi-furnished, dan furnished.",
  },
],
        testing:
  "Model diuji menggunakan data pengujian untuk mengevaluasi kemampuannya dalam memprediksi harga sewa. Harga sewa hasil prediksi dibandingkan dengan harga sewa aktual untuk mengukur kinerja model.",

result:
  "Hasil pengujian menunjukkan bahwa model regresi linear mampu mengidentifikasi hubungan positif antara ukuran rumah dan harga sewa. Namun, masih terdapat beberapa kesalahan prediksi dan nilai ekstrem, yang menunjukkan bahwa harga sewa juga dapat dipengaruhi oleh faktor lainnya.",

challenges: [
  {
    challenge: "Dataset memiliki beberapa nilai harga sewa yang sangat tinggi sehingga dapat memengaruhi hasil prediksi.",
    solution: "Dilakukan analisis outlier dan preprocessing data untuk mengurangi pengaruh nilai ekstrem terhadap model regresi."
  },
  {
    challenge: "Harga sewa dapat berbeda cukup besar meskipun ukuran rumah relatif sama.",
    solution: "Dilakukan analisis eksplorasi data dan analisis korelasi untuk mengetahui hubungan antara ukuran rumah, status furnishing, dan fitur numerik lainnya."
  },
],
        extra: [
          { heading: "Dataset", body: "[Dataset Name]" },
          {
            heading: "Data Preparation",
            body: "Tahapan persiapan data yang dikerjakan pada project ini:",
            items: [
              "Data Cleaning",
              "Missing Value Handling",
              "Data Transformation",
              "Feature Preparation",
            ],
          },
          {
            heading: "Exploratory Data Analysis",
            body: "Analisis eksploratif dilakukan untuk memahami struktur dataset, distribusi data, dan karakteristik fitur.",
            items: [
              "Dataset overview: [Dataset Overview]",
              "Distribusi data: [Distribution]",
              "Analisis fitur: [Feature Analysis]",
              "Chart: [Chart Placeholder]",
            ],
          },
          { heading: "Algorithm", body: "[Classification Algorithm]" },
          {
            heading: "Model Training",
            body: "Model dilatih menggunakan data latih hasil preprocessing, kemudian diuji menggunakan data uji untuk menilai kemampuan klasifikasinya.",
          },
          {
            heading: "Model Evaluation",
            body: "Evaluasi model menggunakan metrik klasifikasi berikut:",
            items: [
              "Accuracy: [Accuracy]",
              "Precision: [Precision]",
              "Recall: [Recall]",
              "F1-Score: [F1-Score]",
              "Confusion Matrix: [Confusion Matrix]",
            ],
          },
        ],
      },
      en: {
        title: "Data Mining Classification Project",
        categoryLabel: "Data Mining • Machine Learning",
        shortDescription:
          "A data processing and classification project using data mining techniques, from preprocessing to model evaluation.",
        description:
          "A data processing and classification project using data mining techniques. The project covers dataset preparation, data preprocessing, exploratory data analysis, feature preparation, classification model development, testing, performance evaluation, and result visualization.",
        summary:
          "A complete data mining workflow: dataset preparation, preprocessing, exploratory analysis, classification modeling, evaluation, and result visualization.",
        overview:
          "This project focuses on data processing and building a classification model using data mining techniques. Each stage was completed in sequence, from dataset preparation through model performance evaluation and result visualization.",
        background:
          "Raw data is generally not ready for modeling and requires cleaning, transformation, and analysis before being used in a classification model.",
        problem:
          "The problem addressed is classifying data into target categories based on the features available in the dataset. Specific details: [Problem Description]",
        objective:
          "Build and evaluate a data mining based classification model that maps dataset features to target categories, and present the analysis through data visualization.",
        role: "Data Preparation, Data Mining & Model Evaluation",
        process: [
          "Dataset Collection",
          "Data Cleaning",
          "Data Preprocessing",
          "Exploratory Data Analysis",
          "Feature Preparation",
          "Model Training",
          "Model Testing",
          "Model Evaluation",
          "Data Visualization",
        ],
        features: [
          "Data Cleaning",
          "Missing Value Handling",
          "Data Transformation",
          "Feature Preparation",
          "Exploratory Data Analysis",
          "Model Training & Testing",
          "Model Evaluation",
          "Data Visualization",
        ],
        galleryHeading: "Visualization",

gallery: [
{
  image: FotoBoxplot,
  caption:
    "A boxplot showing the distribution of rental prices by city, namely Kolkata, Mumbai, Bangalore, Delhi, Chennai, and Hyderabad.",
},

{
  image: FotoBoxplot2,
  caption:
    "A boxplot showing the distribution of house sizes after outliers have been removed. The graph is used to observe the minimum value, quartiles, median, and maximum value of house sizes.",
},

{
  image: FotoScatterPlot,
  caption:
    "A scatter plot showing the relationship between house size and rental price based on furnishing status, namely unfurnished, semi-furnished, and furnished.",
},

{
  image: FotoHeatmap,
  caption:
    "A heatmap showing the correlation levels among numerical features, namely BHK, rent, size, and bathroom. The correlation values are used to examine the strength of relationships between variables.",
},

{
  image: FotoScatterPlot2,
  caption:
    "A scatter plot showing the relationship between house size and rental price. The graph is used to observe the trend of rental prices based on house size.",
},

{
  image: FotoRegresiLinear,
  caption:
    "A linear regression graph showing the relationship and trend between house size and rental price.",
},

{
  image: FotoBoxplot3,
  caption:
    "A boxplot showing the distribution of rental prices based on house size categories, namely small, medium, large, and very large.",
},

{
  image: FotoResidualPlot,
  caption:
    "A residual plot showing the relationship between predicted rental values and error or residual values. The graph is used to examine the pattern of errors in the prediction results.",
},

{
  image: FotoScatterPlot3,
  caption:
    "A scatter plot showing the relationship between house size and the number of bathrooms. The graph is used to observe the relationship between house size and the number of available bathrooms.",
},

{
  image: FotoRegresiLinear2,
  caption:
    "A linear regression graph showing the relationship and trend between house size and the number of bathrooms. The regression line illustrates the tendency for the number of bathrooms to increase as house size increases.",
},

{
  image: FotoBoxplot4,
  caption:
    "A boxplot showing the distribution of the number of bathrooms based on house size categories, namely small, medium, large, and very large. The graph is used to compare the distribution and number of bathrooms across each house size category.",
},

{
  image: FotoBoxplot5,
  caption:
    "A boxplot showing the distribution of house sizes based on furnishing status, namely unfurnished, semi-furnished, and furnished. The graph is used to compare the distribution of house sizes across each furnishing status.",
},

{
  image: FotoBarchat,
  caption:
    "A bar chart showing the number of house data points based on furnishing status, namely unfurnished, semi-furnished, and furnished. The graph is used to observe the number of data points in each furnishing status category.",
},

{
  image: FotoScatterPlot4,
  caption:
    "A scatter plot showing the distribution of house sizes based on furnishing status, namely unfurnished, semi-furnished, and furnished.",
},
],
        testing:
  "The model was tested using test data to evaluate its ability to predict rental prices. The predicted rental prices were compared with the actual rental prices to measure the model's performance.",

result:
  "The testing results show that the linear regression model can identify a positive relationship between house size and rental price. However, several prediction errors and extreme values were observed, indicating that other factors may also influence rental prices.",

challenges: [
  {
    challenge: "The dataset contains extreme rental price values that may affect the prediction results.",
    solution: "Outlier analysis and data preprocessing were performed to reduce the influence of extreme values on the regression model."
  },
  {
    challenge: "Rental prices vary considerably even among houses with similar sizes.",
    solution: "Exploratory data analysis and correlation analysis were used to identify relationships between house size, furnishing status, and other numerical features."
  },
],
        extra: [
          { heading: "Dataset", body: "[Dataset Name]" },
          {
            heading: "Data Preparation",
            body: "Data preparation stages completed in this project:",
            items: [
              "Data Cleaning",
              "Missing Value Handling",
              "Data Transformation",
              "Feature Preparation",
            ],
          },
          {
            heading: "Exploratory Data Analysis",
            body: "Exploratory analysis was performed to understand the dataset structure, data distribution, and feature characteristics.",
            items: [
              "Dataset overview: [Dataset Overview]",
              "Distribution: [Distribution]",
              "Feature analysis: [Feature Analysis]",
              "Chart: [Chart Placeholder]",
            ],
          },
          { heading: "Algorithm", body: "[Classification Algorithm]" },
          {
            heading: "Model Training",
            body: "The model was trained using preprocessed training data, then tested with held-out test data to assess its classification ability.",
          },
          {
            heading: "Model Evaluation",
            body: "The model was evaluated using the following classification metrics:",
            items: [
              "Accuracy: [Accuracy]",
              "Precision: [Precision]",
              "Recall: [Recall]",
              "F1-Score: [F1-Score]",
              "Confusion Matrix: [Confusion Matrix]",
            ],
          },
        ],
      },
    },
  },

    {
    id: "inventory-management",
    number: "03",
    slug: "inventory-management-system",
    thumbnail: FotoDash,
    thumbnailAlt: {
      id: "Tampilan sistem manajemen inventaris barang berbasis web",
      en: "Web-based inventory management system interface",
    },
    categories: ["information-system", "web-development", "database"],
    technologies: [
      "TanStack Start",
      "React",
      "TypeScript",
      "Vite",
      "Prisma",
      "MySQL",
    ],
    featured: true,
    links: [
      { label: "GitHub", url: null },
      { label: "Live Demo", url: null },
      { label: "Documentation", url: null },
    ],
    content: {
      id: {
        title: "Sistem Manajemen Inventaris Barang",
        categoryLabel: "Information System • Web Application",
        shortDescription:
          "Sistem informasi berbasis web untuk mengelola data dan stok inventaris barang secara terstruktur.",
        description:
          "Sistem informasi manajemen inventaris barang berbasis web yang dikembangkan untuk membantu proses pencatatan, pengelolaan, dan pemantauan inventaris secara terpusat. Sistem menyediakan fitur untuk mengelola data barang, stok, dan informasi inventaris sehingga proses pengelolaan barang dapat dilakukan secara lebih terstruktur.",
        summary:
          "Aplikasi web untuk mengelola data inventaris dan memantau stok barang dalam satu sistem terintegrasi.",
        overview:
          "Project ini merupakan pengembangan sistem manajemen inventaris barang berbasis web. Sistem dirancang untuk membantu administrator dalam mengelola data barang dan memantau kondisi serta ketersediaan stok secara lebih terstruktur. Data inventaris disimpan dalam basis data sehingga informasi barang dapat dikelola dan ditampilkan melalui antarmuka aplikasi.",
        background:
          "Pengelolaan inventaris membutuhkan pencatatan data barang dan stok yang terstruktur agar informasi mengenai ketersediaan barang dapat dipantau dengan lebih mudah. Sistem berbasis web digunakan untuk membantu memusatkan pengelolaan data inventaris dalam satu aplikasi.",
        problem:
          "Pengelolaan data inventaris yang tidak terpusat dapat menyulitkan proses pencatatan barang, pemantauan stok, dan pencarian informasi inventaris.",
        objective:
          "Membangun sistem manajemen inventaris berbasis web yang dapat membantu administrator dalam mengelola data barang dan memantau stok inventaris secara terstruktur.",
        role:
          "System Analysis & Web Application Development",
        process: [
          "Requirements Analysis",
          "System Design",
          "Database Design",
          "Application Development",
          "Feature Implementation",
          "Testing & Evaluation",
        ],
        features: [
          "Manajemen data barang",
          "Manajemen stok inventaris",
          "Pencatatan barang",
          "Pencarian data inventaris",
          "Dashboard administrasi",
          "Pengelolaan data menggunakan database",
        ],
        galleryHeading: "Screenshots",
gallery: [
  {
    image: FotoLogin,
    caption:
      "Halaman login digunakan untuk masuk ke dalam sistem manajemen inventaris barang menggunakan akun yang telah terdaftar.",
  },
  {
    image: FotoDash,
    caption:
      "Halaman dashboard menampilkan ringkasan informasi utama mengenai pengelolaan inventaris barang dalam sistem.",
  },
  {
    image: FotoPengguna2,
    caption:
      "Halaman manajemen pengguna digunakan untuk mengelola data pengguna yang memiliki akses ke dalam sistem inventaris.",
  },
  {
    image: FotoKategori,
    caption:
      "Halaman kategori digunakan untuk mengelola kategori barang yang terdapat dalam sistem inventaris.",
  },
  {
    image: FotoPemasok,
    caption:
      "Halaman pemasok digunakan untuk mengelola data pemasok yang menyediakan barang untuk kebutuhan inventaris.",
  },
  {
    image: FotoBarang,
    caption:
      "Halaman barang digunakan untuk mengelola data barang yang tersimpan dalam sistem inventaris.",
  },
  {
    image: FotoBarangMasuk,
    caption:
      "Halaman barang masuk digunakan untuk mencatat dan mengelola transaksi barang yang masuk ke dalam inventaris.",
  },
  {
    image: FotoBarangKeluar,
    caption:
      "Halaman barang keluar digunakan untuk mencatat dan mengelola transaksi barang yang keluar dari inventaris.",
  },
  {
    image: FotoProfil,
    caption:
      "Halaman profil digunakan untuk melihat dan mengelola informasi profil pengguna.",
  },
  {
    image: FotoPengaturan2,
    caption:
      "Halaman pengaturan digunakan untuk mengelola pengaturan yang berkaitan dengan akun dan sistem inventaris.",
  },
],
        testing:
          "Pengujian sistem dilakukan untuk memastikan fitur utama pengelolaan inventaris dapat berjalan sesuai dengan kebutuhan yang telah ditentukan.",
        result:
          "Sistem berhasil menyediakan fitur untuk mengelola data inventaris dan membantu administrator dalam memantau informasi barang serta stok secara lebih terstruktur.",
        challenges: [
          {
            challenge:
              "Mengelola data barang dan stok agar tetap terhubung dengan database.",
            solution:
              "Menggunakan Prisma sebagai ORM untuk mengelola interaksi antara aplikasi dan database MySQL secara terstruktur.",
          },
          {
            challenge:
              "Menyediakan antarmuka pengelolaan inventaris yang mudah digunakan.",
            solution:
              "Mengembangkan antarmuka berbasis React dengan struktur halaman dan komponen yang disesuaikan dengan kebutuhan pengelolaan inventaris.",
          },
        ],
      },

      en: {
        title: "Inventory Management System",
        categoryLabel: "Information System • Web Application",
        shortDescription:
          "A web-based information system for managing inventory data and stock in a structured way.",
        description:
          "A web-based inventory management information system developed to support centralized inventory recording, management, and monitoring. The system provides features for managing item data, stock, and inventory information, allowing inventory management processes to be handled in a more structured way.",
        summary:
          "A web application for managing inventory data and monitoring stock within an integrated system.",
        overview:
          "This project is a web-based inventory management system designed to help administrators manage item data and monitor inventory conditions and stock availability in a structured way. Inventory data is stored in a database so that item information can be managed and displayed through the application interface.",
        background:
          "Inventory management requires structured recording of item and stock data so that information about item availability can be monitored more easily. A web-based system helps centralize inventory data management within a single application.",
        problem:
          "Uncentralized inventory management can make it difficult to record items, monitor stock, and search for inventory information.",
        objective:
          "Build a web-based inventory management system that helps administrators manage item data and monitor inventory stock in a structured way.",
        role:
          "System Analysis & Web Application Development",
        process: [
          "Requirements Analysis",
          "System Design",
          "Database Design",
          "Application Development",
          "Feature Implementation",
          "Testing & Evaluation",
        ],
        features: [
          "Item data management",
          "Inventory stock management",
          "Item recording",
          "Inventory data search",
          "Administrative dashboard",
          "Database-based data management",
        ],
        galleryHeading: "Screenshots",
gallery: [
  {
    image: FotoLogin,
    caption:
      "The login page is used to access the inventory management system using a registered account.",
  },
  {
    image: FotoDash,
    caption:
      "The dashboard page displays a summary of key information related to inventory management in the system.",
  },
  {
    image: FotoPengguna2,
    caption:
      "The user management page is used to manage user data and access to the inventory system.",
  },
  {
    image: FotoKategori,
    caption:
      "The category page is used to manage item categories available in the inventory system.",
  },
  {
    image: FotoPemasok,
    caption:
      "The supplier page is used to manage supplier data for items provided for inventory needs.",
  },
  {
    image: FotoBarang,
    caption:
      "The item management page is used to manage item data stored in the inventory system.",
  },
  {
    image: FotoBarangMasuk,
    caption:
      "The incoming items page is used to record and manage transactions for items added to the inventory.",
  },
  {
    image: FotoBarangKeluar,
    caption:
      "The outgoing items page is used to record and manage transactions for items removed from the inventory.",
  },
  {
    image: FotoProfil,
    caption:
      "The profile page is used to view and manage user profile information.",
  },
  {
    image: FotoPengaturan2,
    caption:
      "The settings page is used to manage account and inventory system settings.",
  },
],
        testing:
          "The system was tested to ensure that the main inventory management features function according to the defined requirements.",
        result:
          "The system successfully provides features for managing inventory data and helps administrators monitor item and stock information in a more structured way.",
        challenges: [
          {
            challenge:
              "Managing item and stock data while keeping the data connected to the database.",
            solution:
              "Prisma was used as an ORM to manage interactions between the application and MySQL database in a structured way.",
          },
          {
            challenge:
              "Providing an inventory management interface that is easy to use.",
            solution:
              "A React-based interface was developed with page structures and components adapted to inventory management requirements.",
          },
        ],
      },
    },
  },
  
];

export const projectCategories: ("all" | ProjectCategory)[] = [
  "all",
  "information-system",
  "web-development",
  "data-mining",
  "machine-learning",
  "database",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

