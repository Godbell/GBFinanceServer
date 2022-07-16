package kr.godbell.gbfinance;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Index
{

	@RequestMapping("/hello")
	public String index()
	{
		return "Hello World!";
	}

}
