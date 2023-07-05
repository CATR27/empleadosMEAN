import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  //propiedades//
  enviado = false;
  empleadoDepartamento: any = [
    'Administración', 'Finanzas', 'Recursos Humanos', 'TI', 'Ventas'
  ];
  editarForm: FormGroup;
  empleadoData:Empleado[];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private empleadoService: EmpleadoService,
    private actRoute: ActivatedRoute
  ){}

  //Método para generar el formulario
  mainForm(){
    this.editarForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      email: ['',
    [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    ],
  ],
    telefono: ['',
    [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]

  ]
    })
  }

  //Método para asignar el departamento seleccionado por el usuario
  actualizarDepartamento(d){
    this.editarForm.get('departamento').setValue(d,{
      onlySelf: true,
    })
  }

  //Método para acceder a los controles del formulario
  get myForm(){
    return this.editarForm.controls;
  }

  ngOnInit():void{
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmpleado(id);
    this.editarForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      email: ['',
    [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    ],
  ],
    telefono: ['',
    [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]

  ]
    });

  }

  //metoodo para buscar al empledao a quitar//
  getEmpleado(id){
    this.empleadoService.getEmpleado(id).subscribe((data)=>{
      this.editarForm.setValue({
        nombre: data['nombre'],
        departamento: data['departamento'],
        email: data['email'],
        telefono: data['telefono'],
        
      });
    })
  }
//metodo que se ejecuta cuando se envie el formulario//
onSubmit()
{
  this.enviado=true;
  if(!this.editarForm.valid){
    return false;
  }else{
    if(window.confirm('estas seguro que deseas modificar?')){
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.empleadoService.udateEmpleado(id,this.editarForm.value)
      .subscribe({
        complete:()=>{
          this.router.navigateByUrl('/listar-empleados');
          console.log('se actualizo correctamente');
        },
        error:(e)=>{
          console.log(e);
        },
      });
    }
  }
}
}
