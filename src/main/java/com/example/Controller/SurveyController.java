package com.example.Controller;

import com.example.Model.Survey;
import com.example.Repository.SurveyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/survey")
public class SurveyController {

    @Autowired
    private SurveyRepo surveyRepository;

    @PostMapping("/submit")
    public void submitSurvey(@RequestBody String answers) {
        Survey survey = new Survey();
        survey.setAnswers(answers);
        surveyRepository.save(survey);
    }
}
