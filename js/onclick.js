       
function ketqua() {

    
    var y = document.getElementById("selection");
    var z = document.getElementById("huongdat");
    
    
        if(z.options[z.selectedIndex].text == "Nam"){
        document.getElementById("imgPT").src="images/phongthuy/nam.jpg" ;
    } else if(z.options[z.selectedIndex].text == "Tây Nam"){
        document.getElementById("imgPT").src="images/phongthuy/taynam.jpg" ;
    } else if(z.options[z.selectedIndex].text == "Tây"){
        document.getElementById("imgPT").src ="images/phongthuy/tay.jpg";
    } else if(z.options[z.selectedIndex].text == "Tây Bắc"){
        document.getElementById("imgPT").src="images/phongthuy/taybac.jpg" ;
    } else if(z.options[z.selectedIndex].text == "Bắc"){
        document.getElementById("imgPT").src ="images/phongthuy/bac.jpg";
    } else if(z.options[z.selectedIndex].text == "Đông Bắc"){
        document.getElementById("imgPT").src="images/phongthuy/dongbac.jpg" ;
    } else if(z.options[z.selectedIndex].text == "Đông"){
        document.getElementById("imgPT").src ="images/phongthuy/dong.jpg";
    } else if(z.options[z.selectedIndex].text == "Đông Nam"){
        document.getElementById("imgPT").src ="images/phongthuy/dongnam.jpg";
    }
    
 
    // switch(z.options[z.selectedIndex].text){
    //     case "Nam":
                
    //            { img.src="images/phongthuy/nam.jpg";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
    //     case "Tây Nam":
    //         { img.src="images/phongthuy/taynam.jpg";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
    //     case "Tây":
    //         { img.src="images/phongthuy/tay.png";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
    //     case "Tây Bắc":
    //         { img.src="images/phongthuy/taybac.png";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
    //     case "Bắc":
    //         { img.src="images/phongthuy/bac.png";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
    //     case "Đông Bắc":
    //         { img.src="images/phongthuy/dongbac.png";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
    //     case "Đông":
    //         { img.src="images/phongthuy/dong.png";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
    //     case "Đông Nam":
    //         { img.src="images/phongthuy/dongnam.png";
    //             var src = document.getElementById("imgPT");
    //             src.appendChild(img);
    //             break;}
            
    // }
    


                                    
    if(document.getElementById("myText").value=="1901"&&y.options[y.selectedIndex].text=="Nam"){
        document.getElementById("noidung").innerHTML=" <h4>Năm sinh: 1901 (Tân Sửu)</h4><p>Mệnh: <b>Bích Thượng Thổ</b> - Quẻ: <b>Ly Hỏa</b>, thuộc: <b>Đông Tứ Mệnh</b></p><p>Hướng tốt của bạn theo thứ tự là: <b>Đông, Đông Nam, Bắc, Nam,</b> các hướng còn lại đều là hướng xấu.</p><p>Khi xây nhà hoặc chọn hướng, bạn nên chu ý:</p><ul><font color= 'red'><li>Hướng Đông: [Sinh Khí :: Sự dồi dào, hạnh phúc] Hướng cửa chính, các phòng quan trọng, hướng kê đầu giường.</li><li>Hướng Đông Nam: [Thiên Y :: Sức khỏe] Hướng phòng ngủ, kê đầu gường khi ốm.</li><li>Hướng Bắc: [Diên Niên :: Sự hòa hợp] Vị trí tốt nhất cho phòng sinh hoạt chung.</li><li>Hướng Nam: [Phục vị :: Cá nhân] Vị trí này hỗ trợ cho hoạt động suy nghĩ và nhận thức, chính là nơi đặt phòng làm việc.</li></font><li>Hướng Đông Bắc: [Hoạ Hại :: Bất hạnh] Ở nơi này mọi việc diễn biến không như dự định, phòng học không nên đặt ở đây.</li><li>Hướng Tây: [Ngũ Quỷ :: Tranh cải] Nơi cấm kỵ của phòng sinh hoạt chung</li><li>Hướng Tây Nam: [Lục Sát :: Luật pháp & Sức khỏe] Các phòng chính tránh đặt vị trí này.</li><li>Hướng Tây Bắc: [Tuyệt Mệnh :: Thảm họa] Hãy tránh hướng này, tại đây chỉ nên đặt nhà kho và nhà vệ sinh.</li></ul>"
    }
    else if(document.getElementById("myText").value=="1901"&&y.options[y.selectedIndex].text=="Nữ"){
        document.getElementById("noidung").innerHTML=" <h4>Năm sinh: 1901 (Tân Sửu)</h4><p>Mệnh: <b>Bích Thượng Thổ</b> - Quẻ: <b>Càn Kim</b>, thuộc: <b>Tây Tứ Mệnh</b></p><p>Hướng tốt của bạn theo thứ tự là: <b>Tây, Đông Bắc, Tây Nam, Tây Bắc,</b> các hướng còn lại đều là hướng xấu.</p><p>Khi xây nhà hoặc chọn hướng, bạn nên chu ý:</p><ul><font color = 'red'><li>Hướng Tây: [Sinh Khí :: Sự dồi dào, hạnh phúc] Hướng cửa chính, các phòng quan trọng, hướng kê đầu giường.</li><li>Hướng Đông Bắc: [Thiên Y :: Sức khỏe] Hướng phòng ngủ, kê đầu gường khi ốm.</li><li>Hướng Tây Nam: [Diên Niên :: Sự hòa hợp] Vị trí tốt nhất cho phòng sinh hoạt chung.</li><li>Hướng Tây Bắc: [Phục vị :: Cá nhân] Vị trí này hỗ trợ cho hoạt động suy nghĩ và nhận thức, chính là nơi đặt phòng làm việc.</li></font><li>Hướng Đông Nam: [Hoạ Hại :: Bất hạnh] Ở nơi này mọi việc diễn biến không như dự định, phòng học không nên đặt ở đây.</li><li>Hướng Đông: [Ngũ Quỷ :: Tranh cải] Nơi cấm kỵ của phòng sinh hoạt chung.</li><li>Hướng Bắc: [Lục Sát :: Luật pháp & Sức khỏe] Các phòng chính tránh đặt vị trí này.</li><li>Hướng Nam: [Tuyệt Mệnh :: Thảm họa] Hãy tránh hướng này, tại đây chỉ nên đặt nhà kho và nhà vệ sinh.</li></ul>"
    }
    else if(document.getElementById("myText").value=="1902"&&y.options[y.selectedIndex].text=="Nam"){
        document.getElementById("noidung").innerHTML=" <h4>Năm sinh: 1902 (Nhâm Dần)</h4><p>Mệnh: <b>Kim Bá Kim</b> - Quẻ: <b>Cấn Thổ</b>, thuộc: <b>Tây Tứ Mệnh</b></p><p>Hướng tốt của bạn theo thứ tự là: <b>Tây Nam, Tây Bắc, Tây, Đông Bắc,</b> các hướng còn lại đều là hướng xấu.</p><p>Khi xây nhà hoặc chọn hướng, bạn nên chu ý:</p><ul><font color = 'red'><li>Hướng Tây Nam: [Sinh Khí :: Sự dồi dào, hạnh phúc] Hướng cửa chính, các phòng quan trọng, hướng kê đầu giường.</li><li>Hướng Tây Bắc: [Thiên Y :: Sức khỏe] Hướng phòng ngủ, kê đầu gường khi ốm.</li><li>Hướng Tây: [Diên Niên :: Sự hòa hợp] Vị trí tốt nhất cho phòng sinh hoạt chung.</li><li>Hướng Đông Bắc: [Phục vị :: Cá nhân] Vị trí này hỗ trợ cho hoạt động suy nghĩ và nhận thức, chính là nơi đặt phòng làm việc.</li></font><li>Hướng Nam: [Hoạ Hại :: Bất hạnh] Ở nơi này mọi việc diễn biến không như dự định, phòng học không nên đặt ở đây.</li><li>Hướng Bắc: [Ngũ Quỷ :: Tranh cải] Nơi cấm kỵ của phòng sinh hoạt chung.</li><li>Hướng Đông: [Lục Sát :: Luật pháp & Sức khỏe] Các phòng chính tránh đặt vị trí này.</li><li>Hướng Đông Nam: [Tuyệt Mệnh :: Thảm họa] Hãy tránh hướng này, tại đây chỉ nên đặt nhà kho và nhà vệ sinh.</li></ul>"
    }
    else if(document.getElementById("myText").value=="1902"&&y.options[y.selectedIndex].text=="Nữ"){
        document.getElementById("noidung").innerHTML=" <h4>Năm sinh: 1902 (Nhâm Dần)</h4><p>Mệnh: <b>Kim Bá Kim</b> - Quẻ: <b>Đoài Kim</b>, thuộc: <b>Tây Tứ Mệnh</b></p><p>Hướng tốt của bạn theo thứ tự là: <b>Tây Bắc, Tây Nam, Đông Bắc, Tây,</b> các hướng còn lại đều là hướng xấu.</p><p>Khi xây nhà hoặc chọn hướng, bạn nên chu ý:</p><ul><font color = 'red'><li>Hướng Tây Bắc: [Sinh Khí :: Sự dồi dào, hạnh phúc] Hướng cửa chính, các phòng quan trọng, hướng kê đầu giường.</li><li>Hướng Tây Nam: [Thiên Y :: Sức khỏe] Hướng phòng ngủ, kê đầu gường khi ốm.</li><li>Hướng Đông Bắc: [Diên Niên :: Sự hòa hợp] Vị trí tốt nhất cho phòng sinh hoạt chung.</li><li>Hướng Tây: [Phục vị :: Cá nhân] Vị trí này hỗ trợ cho hoạt động suy nghĩ và nhận thức, chính là nơi đặt phòng làm việc.</li></font><li>Hướng Bắc: [Hoạ Hại :: Bất hạnh] Ở nơi này mọi việc diễn biến không như dự định, phòng học không nên đặt ở đây.</li><li>Hướng Nam: [Ngũ Quỷ :: Tranh cải] Nơi cấm kỵ của phòng sinh hoạt chung.</li><li>Hướng Đông Nam: [Lục Sát :: Luật pháp & Sức khỏe] Các phòng chính tránh đặt vị trí này.</li><li>Hướng Đông: [Tuyệt Mệnh :: Thảm họa] Hãy tránh hướng này, tại đây chỉ nên đặt nhà kho và nhà vệ sinh.</li></ul>"
    }
    else if(document.getElementById("myText").value=="1903"&&y.options[y.selectedIndex].text=="Nam"){
        document.getElementById("noidung").innerHTML=" <h4>Năm sinh: 1903 (Quý Mẹo)</h4><p>Mệnh: <b>Kim Bá Kim</b> - Quẻ: <b>Đoài Kim</b>, thuộc: <b>Tây Tứ Mệnh</b></p><p>Hướng tốt của bạn theo thứ tự là: <b>Tây Bắc, Tây Nam, Đông Bắc, Tây,</b> các hướng còn lại đều là hướng xấu.</p><p>Khi xây nhà hoặc chọn hướng, bạn nên chu ý:</p><ul><font color = 'red'><li>Hướng Tây Bắc: [Sinh Khí :: Sự dồi dào, hạnh phúc] Hướng cửa chính, các phòng quan trọng, hướng kê đầu giường.</li><li>Hướng Tây Nam: [Thiên Y :: Sức khỏe] Hướng phòng ngủ, kê đầu gường khi ốm.</li><li>Hướng Đông Bắc: [Diên Niên :: Sự hòa hợp] Vị trí tốt nhất cho phòng sinh hoạt chung.</li><li>Hướng Tây: [Phục vị :: Cá nhân] Vị trí này hỗ trợ cho hoạt động suy nghĩ và nhận thức, chính là nơi đặt phòng làm việc.</li></font><li>Hướng Bắc: [Hoạ Hại :: Bất hạnh] Ở nơi này mọi việc diễn biến không như dự định, phòng học không nên đặt ở đây.</li><li>Hướng Nam: [Ngũ Quỷ :: Tranh cải] Nơi cấm kỵ của phòng sinh hoạt chung.</li><li>Hướng Đông Nam: [Lục Sát :: Luật pháp & Sức khỏe] Các phòng chính tránh đặt vị trí này.</li><li>Hướng Đông: [Tuyệt Mệnh :: Thảm họa] Hãy tránh hướng này, tại đây chỉ nên đặt nhà kho và nhà vệ sinh.</li></ul>"
    }
    else if(document.getElementById("myText").value=="1903"&&y.options[y.selectedIndex].text=="Nữ"){
        document.getElementById("noidung").innerHTML=" <h4>Năm sinh: 1903 (Quý Mẹo)</h4><p>Mệnh: <b>Kim Bá Kim</b> - Quẻ: <b>Cấn Thổ</b>, thuộc: <b>Tây Tứ Mệnh</b></p><p>Hướng tốt của bạn theo thứ tự là: <b>Tây Nam, Tây Bắc, Tây, Đông Bắc,</b> các hướng còn lại đều là hướng xấu.</p><p>Khi xây nhà hoặc chọn hướng, bạn nên chu ý:</p><ul><font color = 'red'><li>Hướng Tây Nam: [Sinh Khí :: Sự dồi dào, hạnh phúc] Hướng cửa chính, các phòng quan trọng, hướng kê đầu giường.</li><li>Hướng Tây Bắc: [Thiên Y :: Sức khỏe] Hướng phòng ngủ, kê đầu gường khi ốm.</li><li>Hướng Tây: [Diên Niên :: Sự hòa hợp] Vị trí tốt nhất cho phòng sinh hoạt chung.</li><li>Hướng Đông Bắc: [Phục vị :: Cá nhân] Vị trí này hỗ trợ cho hoạt động suy nghĩ và nhận thức, chính là nơi đặt phòng làm việc.</li></font><li>Hướng Nam: [Hoạ Hại :: Bất hạnh] Ở nơi này mọi việc diễn biến không như dự định, phòng học không nên đặt ở đây.</li><li>Hướng Bắc: [Ngũ Quỷ :: Tranh cải] Nơi cấm kỵ của phòng sinh hoạt chung.</li><li>Hướng Đông: [Lục Sát :: Luật pháp & Sức khỏe] Các phòng chính tránh đặt vị trí này.</li><li>Hướng Đông Nam: [Tuyệt Mệnh :: Thảm họa] Hãy tránh hướng này, tại đây chỉ nên đặt nhà kho và nhà vệ sinh.</li></ul>"
    }
}                         
                            