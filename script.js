
    const siswa = [
        {nama: "Andi", nilai:80},
        {nama: "Ali", nilai:90},
        {nama: "Aji", nilai:70},
        {nama: "Ani", nilai:90},
        {nama: "Ando", nilai:85}
    ];

    document.write(`
    <table style="Padding: 10; text-align: center; width: 100%;">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Nilai</th>
                <th>Keterangan</th>
                <th>Grade</th>
                <th>Predikat</th>
            </tr>
        </thead>
        <tbody>
    `);

    var no = 1;
    for(s of siswa){
        //ternary
        let ket = (s.nilai >= 60) ? "lulus" : "gagal";
        let grade = "";
        let predikat = "";
        //if multikondisi
        if(s.nilai > 85 && s.nilai <= 100) grade = "A";
        else if (s.nilai > 75 && s.nilai <=85) grade ="B";  
        else if(s.nilai >=60 && s.nilai <=75) grade ="C";
        else if (s.nilai > 30 && s.nilai < 60) grade ="D";
        else if(s.nilai >= 0 && s.nilai <=30) grade ="E";
        else grade = "";
        switch(grade){
            case "A": predikat = "Sempurna"; break;
            case "B": predikat = "Baik"; break;
            case "C": predikat = "Cukup"; break;
            case "D": predikat = "Kurang";break
            case "E": predikat= "Buruk"; break;
            default : predikat = ""; break;
        
        }

        document.write(`
            <tr>
                <td>${no}</td>
                <td>${s.nama}</td>
                <td>${s.nilai}</td>
                <td>${ket}</td>
                <td>${grade}</td>
                <td>${predikat}</td>
            </tr>
        `);

        no++;
    }

    document.write(`
        </tbody>
    </table>
    `);
