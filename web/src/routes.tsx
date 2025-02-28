import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/study" component={TeacherList} />
      <Route path="/teach" component={TeacherForm} />
      <Route path="/" component={Landing} exact />
    </BrowserRouter>
  );
}

export default Routes;
