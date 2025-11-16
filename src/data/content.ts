import { Project, BlogPost, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Konfigurasi Jaringan LAN',
    description: 'Proyek konfigurasi jaringan lokal menggunakan Cisco Packet Tracer dengan topologi star',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoLink: '#',
    category: 'Networking'
  },
  {
    id: '2',
    title: 'Website Sekolah',
    description: 'Membuat website profil sekolah menggunakan HTML, CSS, dan JavaScript',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoLink: '#',
    category: 'Web Development'
  },
  {
    id: '3',
    title: 'Sistem Monitoring Jaringan',
    description: 'Aplikasi monitoring jaringan sederhana menggunakan Python',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Programming'
  },
  {
    id: '4',
    title: 'Konfigurasi VLAN',
    description: 'Implementasi Virtual LAN untuk segmentasi jaringan yang lebih efisien',
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Networking'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Pengenalan Jaringan Komputer',
    excerpt: 'Memahami dasar-dasar jaringan komputer, topologi, dan protokol yang digunakan',
    content: 'Jaringan komputer adalah sistem yang menghubungkan beberapa komputer untuk berbagi data dan sumber daya. Dalam artikel ini, kita akan membahas berbagai jenis topologi jaringan seperti star, ring, dan bus, serta protokol-protokol penting seperti TCP/IP, HTTP, dan DNS. Topologi star adalah yang paling umum digunakan karena kemudahan maintenance dan skalabilitasnya...',
    date: '2024-01-15',
    category: 'Networking',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Tips Troubleshooting Jaringan',
    excerpt: 'Cara efektif mengatasi masalah jaringan yang sering terjadi di lingkungan sekolah',
    content: 'Troubleshooting jaringan memerlukan pemahaman sistematis tentang bagaimana jaringan bekerja. Langkah pertama adalah mengidentifikasi masalah dengan ping test dan traceroute. Periksa koneksi fisik seperti kabel dan port switch. Verifikasi konfigurasi IP address dan gateway. Gunakan tools seperti ipconfig, netstat, dan wireshark untuk analisis lebih mendalam...',
    date: '2024-02-20',
    category: 'Tutorial',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Belajar Subnetting',
    excerpt: 'Panduan lengkap memahami konsep subnetting dan perhitungan IP address',
    content: 'Subnetting adalah teknik membagi network besar menjadi subnet yang lebih kecil. Ini penting untuk efisiensi penggunaan IP address dan keamanan jaringan. Dalam artikel ini kita akan belajar tentang subnet mask, network ID, broadcast address, dan cara menghitung jumlah host yang tersedia. Contoh: untuk network 192.168.1.0/24, kita bisa membuat 4 subnet dengan mask /26...',
    date: '2024-03-10',
    category: 'Networking',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Pengalaman PKL di Perusahaan IT',
    excerpt: 'Cerita dan pembelajaran selama menjalani Praktik Kerja Lapangan',
    content: 'Selama PKL di perusahaan IT lokal, saya mendapat pengalaman berharga dalam instalasi dan maintenance jaringan perusahaan. Tugas-tugas yang saya lakukan meliputi crimping kabel UTP, konfigurasi router MikroTik, setup access point, dan dokumentasi infrastruktur jaringan. Pengalaman ini sangat membantu memahami aplikasi teori yang dipelajari di sekolah...',
    date: '2024-03-25',
    category: 'Pengalaman',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const skills: Skill[] = [
  { name: 'Networking', percentage: 80, category: 'Technical' },
  { name: 'Programming (Python, JavaScript)', percentage: 70, category: 'Technical' },
  { name: 'Troubleshooting', percentage: 75, category: 'Technical' },
  { name: 'Cisco Packet Tracer', percentage: 85, category: 'Tools' },
  { name: 'Linux Administration', percentage: 65, category: 'Technical' },
  { name: 'Web Development', percentage: 70, category: 'Technical' },
  { name: 'MikroTik RouterOS', percentage: 60, category: 'Tools' },
  { name: 'Teamwork', percentage: 85, category: 'Soft Skills' },
  { name: 'Problem Solving', percentage: 80, category: 'Soft Skills' },
  { name: 'Communication', percentage: 75, category: 'Soft Skills' }
];

export const socialLinks = {
  instagram: 'https://instagram.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  github: 'https://github.com/yourusername'
};
