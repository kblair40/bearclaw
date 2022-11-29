import Form from "./components/Form";
import FormProvider from "./store/FormContext";

function App() {
  return (
    <div className="app">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
