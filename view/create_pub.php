<div class="create-pub-container col-12 mb-4">
    <div class="create-pub p-2 p-sm-4 ">
        <form action="/social/publication" method="post">
            <div class="form-pub col-12 d-flex justify-content-center flex-column">
                <div class="col-12 d-flex pb-2 gap-4">
                    <span class="avatar-pub d-flex justify-content-start "><img src="<?= ASSETS ?>img/user.png" alt=""></span>
                    <!-- <input type="text" class="input-pub col-10" placeholder="Quoi de neuf ?"> -->
                    <div class=" flex-fill">
                        <textarea class="input-pub col-12" name="contenu" placeholder="Quoi de neuf ?"></textarea>

                        <div class="d-flex col-12">
                            <div class="col-10 d-flex align-items-center">
                                <div class="upload-file d-flex gap-3 ">
                                    <img src="<?= ASSETS ?>img/gallery.png" width="" height="2" alt="">
                                    <img src="<?= ASSETS ?>img/gift.png" width="" height="2" alt="">
                                </div>
                            </div>

                            <div class="col-2 d-flex justify-content-end">
                                <input type="submit" class="publier" value="Publier">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </div>
</div>