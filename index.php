<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ANEMIA</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/estilos.css">
    <script type="text/javascript" src="js/functions.js"></script>
</head>

<body>
    <section class="d-flex justify-content-center align-items-center">
        <div class="card shadow col-xs-12 col-sm-6 col-md-6 col-lg-4   p-4">
            <div class="mb-4 d-flex justify-content-start align-items-center">
                <h4> <i class="bi bi-chat-left-quote"></i> &nbsp; FORMULA PARA ANEMIA</h4>
            </div>
            <div class="mb-1">
                <form id="anemia">
                    <div class="form-floating">
                        <select id="lista" class="form-select" aria-label="Floating label select example"  required>
                            <option selected></option>
                            <option value="1">TRATAMIENTO PREVENTIVO PARA ANEMIA</option>
                            <option value="2">TRATAMIENTO PARA ANEMIA</option>
                        </select>
                        <label for="floatingSelect">Seleccionar Tipo de Tratamiento</label>
                    </div>
                    <br>
                    <div class="mb-4">
                        <label for="basic-url" class="form-label"><i class="bi bi-envelope-fill"></i> DETALLE PACIENTE</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="peso" >PESO</span>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required>
                        </div>
                        <!-- <div>
                            <label for="nombre"> <i class="bi bi-person-fill"></i> Peso</label>
                            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="ej: Gabriel" required>
                            <div class="nombre text-danger "></div>
                        </div> -->
                    </div>
                    <div class="mb-4">
                        <label for="basic-url" class="form-label"><i class="bi bi-envelope-fill"></i> RESULTADO</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">DOSIS HIERRO ELEMENTAL(2 MG/KG)</span>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">TRATAMIENTO CANTIDAD GOTAS DIA</span>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">TRATAMIENTO CANTIDAD MILILITROS DIA</span>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="basic-url" class="form-label"><i class="bi bi-envelope-fill"></i> CANTIDAD FRASCOS</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">GOTAS (25MG/ML)</span>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">MILILITROS (15 MG/5ML)</span>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled>
                        </div>
                    </div>
                    <div class="mb-2">
                        <button id="botton" class="col-12 btn btn-primary d-flex justify-content-between" onclick="saludo()">
                            <span>CALCULAR </span><i id="icono" class="bi bi-cursor-fill "></i>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </section>
</body>

</html>