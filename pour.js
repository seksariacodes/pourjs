/***********************************************************************************************
 Title       : Pour.js
 Description : It is a javascript library that can be used for creating interactive and user 
               friendly forms. We have 4 types of form Simple forms, Tabbed forms, Modal forms,
               Popper forms.
 I/p params  : formType - type of the form you want to created
               targetElement - container of the form 
               noStyle - True(when you need style elements predefined)
                       - False(when you will define the style yourself)
               fields - a dictionary of the input elements along with their properties
                        (Example -)
 Authors     : Raushan Pandey (Hyderabad, raushanpandey@gmail.com)
               Rishav Seksaria (Kolkata, rishavseksaria@gmail.com)
 
 Please refer to the readme for documentation of the libarary
***********************************************************************************************/

class Form{
    constructor()
        {
            console.log("Form element created");
        }
    //initialise all the fields for the form and attach them as variables to the form object
    initializeFields(fieldList)
        {
            var fieldArray=[]
            for(var field of fieldList)
            {
            switch(field.toUpperCase())
                {
                    case "NUMBER":
                    //NUMMBER Field
                    console.log("here");
                    //field="here";
                    break;
                    case "DATE":
                    //date field
                    break;
                    case "TEXT":
                    //TEXT Field
                    break;
                    case "TEXTBOX":
                    //Textbox field
                    break;
                    case "DROPDOWN":
                    //DropDown Field
                    break;
                    case "DROPDOWN":
                    //DropDown Field
                    break;
                }
            }
        return fieldArray;
        }
    generateHTML(formAction)
        {
            var html='<form class="'+new Date().getTime()+'" action="'+formAction+'">'
            html=html+'</form>';
            for(var field of fieldList)
            {
                // filed.getHTML example -> numberInput.getHTML()
            }
            return html;
        }
    }

class popperForm extends Form
{

    constructor(targetElement,noStyle,fields,formAction)
    {
        super();
        this.formContainer=targetElement;
        this.style=noStyle;
        var fieldList=Object.keys(fields);
        this.fieldList=super.initializeFields(fieldList);
        this.formAction=formAction;
    }
    generateHTML()
    {
        return (super.generateHTML(this.formAction));
    }
   
  }

class SimpleForm  extends Form{

}
class modalForm  extends Form{

}
class tabedForm extends Form{

}

class pour{
    constructor(formType,targetElement,noStyle,fields,formAction){
        if(formType=='Popper Form') return new popperForm(targetElement,noStyle,fields,formAction);
    }
}

