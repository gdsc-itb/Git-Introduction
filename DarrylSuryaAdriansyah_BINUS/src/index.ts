import GDSCProfile from './GDSCProfile';

interface dataType {
	nama: string;
	jurusan: string;
	alasan: string;
}

const data: dataType = {
	nama: 'Darryl Surya Adriansyah',
	jurusan: 'Computer Science | BINUS University',
	alasan: 'Ingin berteman dengan sesama student developer yang lain serta mengikuti kegiatan yang membangun skill yang akan berguna di masa depan',
};

const Introduction = new GDSCProfile(data.nama, data.jurusan, data.alasan);
Introduction.Print();
