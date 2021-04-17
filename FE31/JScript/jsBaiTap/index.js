var mangAlbum = [];

document.getElementById('btnThemAlbum').onclick = function(){
    var alb = new Album();

    alb.linkAnh = document.getElementById('linkAnh').value;
    alb.tenAlbum = document.getElementById('tenAlbum').value;
    alb.noiDungAlbum = document.getElementById('moTa').value;

    mangAlbum.push(alb);
    createAlbum(mangAlbum);
}

function createAlbum(mangAlb){
    document.getElementById('albumLibrary').innerHTML = "";
    var content = '';

    for(var i = 0; i < mangAlbum.length; i++){
        var album = mangAlb[i];
        
        content += `
        <div class="col-md-4">
                      <div class="card mb-4 box-shadow">
                        <img class="card-img-top"
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                          alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
                          src="${album.linkAnh}"
                          data-holder-rendered="true">
                        <div class="card-body">
                          <h3>${album.tenAlbum}</h3>
                          <p class="card-text">${album.noiDungAlbum}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <button type="button" class="btn btn-success text-white btn-sm btn-outline-secondary" onclick = "editAlbum('${album.tenAlbum}')">Chỉnh sửa</button>
                              <button type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary" onclick = "deleteAlbum('${album.tenAlbum}')">Xóa</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        `;
    }

    document.getElementById('albumLibrary').innerHTML = content;
}

function editAlbum(tenAlb){
    for (var i = 0; i < mangAlbum.length; i++){
        var alb = mangAlbum[i];
        if(alb.tenAlbum === tenAlb){
            document.getElementById('linkAnh').value = alb.linkAnh;
            document.getElementById('tenAlbum').value = alb.tenAlbum;
            document.getElementById('moTa').value = alb.noiDungAlbum;
        }
    }
}

function deleteAlbum(tenAlb){
    for (var i = 0; i < mangAlbum.length; i++){
        var alb = mangAlbum[i];
        if(alb.tenAlbum == tenAlb){
            mangAlbum.splice(i,1);
        }
    }
    createAlbum(mangAlbum);
}

document.getElementById('btnCapNhatAlbum').onclick = function(){
    var albEdit = new Album();

    albEdit.linkAnh = document.getElementById('linkAnh').value;
    albEdit.tenAlbum = document.getElementById('tenAlbum').value;
    albEdit.noiDungAlbum = document.getElementById('moTa').value;

    for (var i = 0; i < mangAlbum.length; i++){
        if(mangAlbum[i].tenAlbum === albEdit.tenAlbum){
            mangAlbum[i] = albEdit;
            createAlbum(mangAlbum);
        }
    }
}