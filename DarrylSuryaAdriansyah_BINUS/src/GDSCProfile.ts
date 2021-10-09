export default class GDSCProfile {
	nama: string;
	jurusan: string;
	alasan: string;

	constructor(nama: string, jurusan: string, alasan: string) {
		this.nama = nama;
		this.jurusan = jurusan;
		this.alasan = alasan;
	}

	public Print() {
		console.log(`Nama                       : ${this.nama}`);
		console.log(`Jurusan                    : ${this.jurusan}`);
		console.log(`Alasan ingin masuk GDSC    : ${this.alasan}`);
	}
}
