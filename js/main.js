let alamat = "https://script.google.com/macros/s/AKfycbwZ2wKOLBvcdWRtmDtG-NDhIxMVLwh-HnFcDOfc7AteUT5aKIZd/exec";
let main = {
    kirimdata: function(dataku) {
        return fetch(alamat, {
            method: 'post',
            body: JSON.stringify(dataku)
        }).then((response) => {
            return response.json();
        });
    },
    simpanDb: function(db) {
        return localStorage.setItem("db", db);
    },
    ambilDb: function(db) {
        return localStorage.getItem(db);
    },
    cekLogin: function(nip) {
        return fetch(alamat + `?nip=${nip}`)
            .then((data) => {
                return data.text();
            });
    },
    logout: function() {
        return fetch(alamat + `?nip=${main.ambilDb('nip')}&keluar=1`)
            .then((data) => {
                return data.text();
            });
    },
    bacaPesan: function() {
        return fetch(alamat + `?nip=${main.ambilDb('nip')}&pesan=ok`)
            .then(res => {
                return res.json();
            })
            .then(pesan => {
                localStorage.setItem("pesan", JSON.stringify(pesan))
            })
    }
}