name = "Muhammad Rafi Sudrajat"
major = "Teknik Fisika"
reason = "Saya ingin mengikuti google solution challenge"


class People:
    # default constructor
    def __init__(self, name, major, reason):
        self.name = name
        self.major = major
        self.reason = reason

    # a method for printing data members
    def __str__(self):
        print('Nama :   ', self.name)
        print('Jurusan :   ', self.major)
        print('Alasan ingin masuk GDSC :   ', self.reason)


myself = People(name, major, reason)
myself.__str__()
